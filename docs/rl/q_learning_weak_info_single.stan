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
  
  //学習率の事前分布にベータ分布，逆温度の事前分布にガンマ分布
  alpha ~ beta(2, 2); 
  beta ~ gamma(2, 0.5);
  
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
