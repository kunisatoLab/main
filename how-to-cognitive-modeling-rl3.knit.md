---
title: "強化学習モデル2"
---

# 認知モデリングの推奨実践法

- Busemeyer & Diederich(2010), Heathcote (2014), Palminteri et al.(2017)を参考にまとめると，以下のような感じになります。

- A 認知課題と認知モデルを準備
- B 人工データ生成とパラメータリカバリーを確認（モデルや課題の修正）
- C データ収集と行動データを確認
- D パラメータ推定
- E 相対モデル比較
- F モデル・シミュレーションと選択的影響テスト

以降は，上記に従って進めていきます。「強化学習モデルを使ったモデル・フィッティング１」ではABCD（一部F）とすすめてきましたが，ここで，推定をcmdstanを使って行いますので，一度Bに戻ってからDEFと進みます。

# 使用するRパッケージ


```r
rm(list = ls())
library(tidyverse)
library(cmdstanr)
library(rstan)
library(posterior)
library(bridgesampling)
```


# B 人工データ生成とパラメータリカバリーを確認（モデルや課題の修正）

## 人口データの生成

改めて人工データを生成するために，実験状況の入ったsim_dataの準備とq_learning_sim関数とq_learning_ll関数の準備をします。


```r
sim_data <- tibble(trial = 1:80,
                   prob_s1 = rep(c(0.2, 0.8), each = 40),
                   prob_s2 = rep(c(0.8, 0.2), each = 40),
                   reward_s1 = ifelse(runif(80) < prob_s1, 1, 0),
                   reward_s2 = ifelse(runif(80) < prob_s2, 1, 0))

q_learning_sim <- function(alpha, beta,data) {
  #変数の準備
  value_s1 <- 0          # s1の価値(初期値は0)
  value_s2 <- 0          # s2の価値(初期値は0)
  current_choice <- NULL     # ある時点の選択（1=s1，0=s2）
  choice_prob_s1 <- NULL  # s1の選択確率
  reward <- NULL                 # 報酬
  # Qlearningモデル
  for (i in 1:nrow(data)){
    # s1を選ぶ確率を計算し,一様分布から発生させた乱数が行動選択確率よりも小さい時に1（s1），大きい時に0（s2）
    choice_prob_s1[i] <- exp(beta*value_s1[i])/(exp(beta*value_s1[i])+exp(beta*value_s2[i]))
    current_choice[i] <- as.integer(runif(1,min=0,max=1) <= choice_prob_s1[i])
    #FBを報酬(r)として、価値の更新を行う。
    if (current_choice[i] == 1){
        reward[i] <- data$reward_s1[i]
        #予測誤差の計算
        prediction_error <-  reward[i] - value_s1[i]
        #予測誤差を使ってs1の価値を更新する
        value_s1[i+1] <- value_s1[i]+alpha*prediction_error
        #s2は更新なし
        value_s2[i+1] <- value_s2[i]
    }else{
        reward[i] <- data$reward_s2[i]
        #予測誤差の計算
        prediction_error <- reward[i] - value_s2[i]
        #予測誤差を使ってs2の価値を更新する
        value_s2[i+1] <- value_s2[i]+alpha*prediction_error
        #s1は更新なし
        value_s1[i+1] <- value_s1[i]
    }
  }
  result <- data.frame(trial = data$trial,
              value_s1 = value_s1[1:nrow(data)], 
              value_s2 = value_s2[1:nrow(data)], 
              prob_s1 = choice_prob_s1,
              choice = current_choice,
              reward = reward)
  return(result)
}

q_learning_ll <- function(alpha, beta,data) {
  #変数の準備
  value_s1 <- 0          # s1の価値(初期値は0)
  value_s2 <- 0          # s2の価値(初期値は0)
  prob_s1 <- NULL  # s1の選択確率
  ll <- 0                 # 対数尤度
  # Qlearningモデル
  for (i in 1:nrow(data)){
    # s1を選ぶ確率を計算
    prob_s1[i] <- exp(beta*value_s1[i])/(exp(beta*value_s1[i])+exp(beta*value_s2[i]))
    #FBを報酬(r)として、価値の更新を行う。
    if (data$choice[i] == 1){
        #予測誤差の計算
        prediction_error <-  data$reward[i] - value_s1[i]
        #予測誤差を使ってs1の価値を更新する
        value_s1[i+1] <- value_s1[i]+alpha*prediction_error
        #s2は更新なし
        value_s2[i+1] <- value_s2[i]
        # 対数尤度の計算のために選択したs1を選ぶ確率の対数を加算
        ll <- ll + log(prob_s1[i])
    }else{
        #予測誤差の計算
        prediction_error <- data$reward[i] - value_s2[i]
        #予測誤差を使ってs2の価値を更新する
        value_s2[i+1] <- value_s2[i]+alpha*prediction_error
        #s1は更新なし
        value_s1[i+1] <- value_s1[i]
        # 対数尤度の計算のために選択したs2を選ぶ確率の対数を加算
        ll <- ll + log(1-prob_s1[i])
    }
  }
  result <- data.frame(trial = data$trial,
              value_s1 = value_s1[1:nrow(data)], 
              value_s2 = value_s2[1:nrow(data)], 
              prob_s1 = prob_s1,
              choice = data$choice,
              reward = data$reward)
  return(list(result = result, ll = ll))
}
```

alpha = 0.3, beta = 2で，シミュレーション・データを生成します。


```r
data_1 <- q_learning_sim(alpha = 0.3, beta = 2, sim_data)
```

## cmdstanrでの推定
### Stanコードの作成

"q_learning_non_info_single.stan"というファイルを作成して，以下のコードを書き込みます。Stanは統計モデリング用のプラットフォームで，MCMCサンプリングによるベイズ推定，変分推定，最適化による最尤推定が可能です。Stanでは，data,parameters,modelのようにブロックごとに指定をして，書いていきます（この３つが最小限のブロック数かと思います）。dataブロックでは入力するデータについて記述します（型と範囲の指定が必要です）。parameterブロックでは，推定するパラメータについて記述します（型と範囲の指定が必要です）。modelブロックでは，データとパラメータを用いた生成モデルの記載をします。なお，データ~分布(y ~ normal(mu, sig))のような形で記述もできますし，target += 対数尤度のように，対数尤度でも記述ができます。以下は，Q学習の推定用のコードですが，グリッドサーチで用意したものに比べて，すっきりしているかと思います。

```
data {
  int<lower=1> trial;
  int<lower=1,upper=2> choice[trial]; // 1 or 2
  int<lower=0,upper=1> reward[trial]; // 0 or 1
}

parameters {
  real<lower=0.0,upper=1.0> alpha; //学習率
  real<lower=0.0> beta;            //逆温度
}

model {
  //学習率と逆温度の事前分布の指定はしていないので，parametersで指定した範囲の無情報事前分布が使われる
  matrix[trial,2] Q;
  Q[1, 1] = 0;
  Q[1, 2] = 0;
  
  for ( t in 1:trial) {
    // 対数尤度を足す
    target += log(exp(beta*Q[t,choice[t]])/(exp(beta*Q[t,choice[t]])+exp(beta*Q[t,3-choice[t]])));
    
    if (t < trial) {
      // 選択された選択肢のQ値の更新
      Q[t+1,choice[t]] = Q[t, choice[t]] + alpha * (reward[t] - Q[t, choice[t]]);
      // 選択されなかった選択肢は更新しない
      Q[t+1, 3- choice[t]] = Q[t, 3- choice[t]];
    }
  }
}
```

Stanコードがstanファイルとして保存できたら，cmdstan_model()コンパイルします。Rは便利ですが計算は遅い言語なので，c++のような高速な計算が可能な言語にコンパイルをします。ちなみに，stanをRで使う場合は，Rstanを使うことが多かったのですが，最近は，cmdstanrが開発されており，こっちのほうがコンパイルもサンプリングも早いのでおすすめです。


```r
q_non_info_single <- cmdstan_model('rl/q_learning_non_info_single.stan')
```

```
## Model executable is up to date!
```

## 最尤推定
コンパイルができたら，最適化による最尤推定をしてみましょう。これまで国里が作ったシンプルなグリッドサーチでしたが，より洗練した方法で最尤推定値を推定します。コンパイルしたモデル$optimize()で推定ができます。必要なのは，データだけです（一応シードは123で指定しています）。グリッドサーチよりも素早く計算できると思います。


```r
mle_cmdstan <- q_non_info_single$optimize(
  data = list(trial = nrow(data_1),
              reward = data_1$reward,
              choice = data_1$choice + 1),
  seed = 123)
```

```
## method = optimize 
##   optimize 
##     algorithm = lbfgs (Default) 
##       lbfgs 
##         init_alpha = 0.001 (Default) 
##         tol_obj = 9.9999999999999998e-13 (Default) 
##         tol_rel_obj = 10000 (Default) 
##         tol_grad = 1e-08 (Default) 
##         tol_rel_grad = 10000000 (Default) 
##         tol_param = 1e-08 (Default) 
##         history_size = 5 (Default) 
##     iter = 2000 (Default) 
##     save_iterations = 0 (Default) 
## id = 1 
## data 
##   file = /tmp/Rtmp1FrGxz/standata-1633b201716cc.json 
## init = 2 (Default) 
## random 
##   seed = 123 
## output 
##   file = /tmp/Rtmp1FrGxz/q_learning_non_info_single-202012240050-1-7dcb23.csv 
##   diagnostic_file =  (Default) 
##   refresh = 100 (Default) 
##  
## Initial log joint probability = -46.4093 
##     Iter      log prob        ||dx||      ||grad||       alpha      alpha0  # evals  Notes  
##        9       -45.391   0.000296022   0.000126859      0.9963      0.9963       11    
## Optimization terminated normally:  
##   Convergence detected: relative gradient magnitude is below tolerance 
## Finished in  0.1 seconds.
```

```r
mle_cmdstan$summary()
```

```
## # A tibble: 3 x 2
##   variable estimate
##   <chr>       <dbl>
## 1 lp__      -45.4  
## 2 alpha       0.486
## 3 beta        1.74
```


## パラメータリカバリ（最尤推定）

グリッドサーチは時間がかかることもあって，ちゃんとしたパラメータリカバリしなかったのですが，ここで，最尤推定のパラメータリカバリをします。αは0.1から1の範囲で0.1刻み，βは0.5から5の範囲で0.5刻みでデータ生成とパラメータ推定を行います(つまり100個分チェックします)。





































