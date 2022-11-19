data {
  int<lower=1> N;
  int<lower=1> trial;
  array[trial] int<lower=1,upper=2> choice; // 1 or 2
  array[trial] int<lower=0,upper=1> reward; // 0 or 1
}

parameters {
  real<lower=0.0,upper=1.0> alpha[N]; //各参加者の学習率
  real<lower=0.0,upper=50.0> beta[N]; //各参加者逆温度
  real<lower=0.0> mu_alpha;           //集団の学習率の平均
  real<lower=0.0> lambda_alpha;       //集団の学習率の精度
  real<lower=0.0> mu_beta;            //集団の逆温度の平均
  real<lower=0.0> log_lambda_beta;    //集団の逆温度の精度の対数
}

model {
  real lambda_beta;        //集団の逆温度の精度
  matrix[trial,2] Q;
  // 集団のパラメータ
  mu_alpha ~ uniform(0.001, 0.999);
  lambda_alpha ~ uniform(log(2), log(600));
  mu_beta ~ uniform(0.001, 0.999);
  log_lambda_beta ~ uniform(log(2), log(600));
  lambda_beta = 50*exp(log_lambda_beta);
  
  // 個人のパラメータ
  alpha ~ beta(mu_alpha*lambda_alpha,(1-mu_alpha)*lambda_alpha);
  beta ~ beta(mu_beta*lambda_beta,(1-mu_beta)*lambda_beta);
  
  for(i in 1:N){
      Q[1, 1] = 0;
      Q[1, 2] = 0;
      for ( t in 1:trial) {
        // 対数尤度を足す
        target += log(exp(beta[i]*Q[t,choice[t]])/(exp(beta[i]*Q[t,choice[t]])+exp(beta[i]*Q[t,3-choice[t]])));
        
        if (t < trial) {
          // 選択された選択肢のQ値の更新
          Q[t+1,choice[t]] = Q[t, choice[t]] + alpha[i] * (reward[t] - Q[t, choice[t]]);
          // 選択されなかった選択肢は更新しない
          Q[t+1, 3- choice[t]] = Q[t, 3- choice[t]];
        }
    }
  }
}
