data{
  int ld;             // length of data
  int nt;             // number of treatment
  int ns;             // number of study
  int study[ld];      // vector of the study id 
  int treatment[ld];  //vector of the treatment id
  int dead[ld];       // vector of the number of dead
  int sampleSize[ld]; // vector of the number of patient
}
parameters{
  real d01;
  real mu[ns];
}
model{
  for(i in 1:ld){
    if(treatment[i]==0){
      dead[i] ~ binomial_logit(sampleSize[i],mu[study[i]]);
    }else{
      dead[i] ~ binomial_logit(sampleSize[i],mu[study[i]]+d01);
    }
  }
  // prior
  d01~normal(0,10000);
  mu~normal(0,10000);
}
generated quantities {
  real OR01;
  real Prob_harm;
  real log_lik[ld];
  OR01 = exp(d01);
  Prob_harm = step(d01);
  for(k in 1:ld){
    if(treatment[k]==0){
      log_lik[k] = binomial_logit_lpmf(dead[k]|sampleSize[k],mu[study[k]]);
    }else{
      log_lik[k] = binomial_logit_lpmf(dead[k]|sampleSize[k],mu[study[k]]+d01);
    }
  }
}
