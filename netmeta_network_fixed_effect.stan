data{
  int ld;             // length of data
  int nct;            // number of compared treatment
  int ns;             // number of study
  int study[ld];      // vector of the study id 
  int treatment[ld];  // vector of the treatment id
  int dead[ld];       // vector of the number of dead
  int sampleSize[ld]; // vector of the number of patient
  int baseline[ld];   // vector of baseline treatment each study
}
parameters{
  real d[nct];
  real mu[ns];
}
model{
  for(i in 1:ld){
    if(baseline[i]==0){
      if(treatment[i]==0){
        dead[i] ~ binomial_logit(sampleSize[i],mu[study[i]]);
      }else{
        dead[i] ~ binomial_logit(sampleSize[i],mu[study[i]]+d[treatment[i]]);
      }
    }else{
      if(baseline[i]==treatment[i]){
        dead[i] ~ binomial_logit(sampleSize[i],mu[study[i]]);
      }else{
        dead[i] ~ binomial_logit(sampleSize[i],mu[study[i]]+d[treatment[i]]-d[baseline[i]]);
      }
    }
  }
  # prior
  d~normal(0,10000);
  mu~normal(0,10000);
}
generated quantities{
  real OR[21];
  real log_lik[ld];
  OR[1] = exp(d[1]);
  OR[2] = exp(d[2]);
  OR[3] = exp(d[3]);
  OR[4] = exp(d[4]);
  OR[5] = exp(d[5]);
  OR[6] = exp(d[6]);
  OR[7] = exp(d[2]-d[1]);
  OR[8] = exp(d[3]-d[1]);
  OR[9] = exp(d[4]-d[1]);
  OR[10] = exp(d[5]-d[1]);
  OR[11] = exp(d[6]-d[1]);
  OR[12] = exp(d[3]-d[2]);
  OR[13] = exp(d[4]-d[2]);
  OR[14] = exp(d[5]-d[2]);
  OR[15] = exp(d[6]-d[2]);
  OR[16] = exp(d[4]-d[3]);
  OR[17] = exp(d[5]-d[3]);
  OR[18] = exp(d[6]-d[3]);
  OR[19] = exp(d[5]-d[4]);
  OR[20] = exp(d[6]-d[4]);
  OR[21] = exp(d[6]-d[5]);
  
  for(k in 1:ld){
    if(baseline[k]==0){
      if(treatment[k]==0){
        log_lik[k] = binomial_logit_lpmf(dead[k]|sampleSize[k],mu[study[k]]);
      }else{
        log_lik[k] = binomial_logit_lpmf(dead[k]|sampleSize[k],mu[study[k]]+d[treatment[k]]);
      }
    }else{
      if(baseline[k]==treatment[k]){
        log_lik[k] = binomial_logit_lpmf(dead[k]|sampleSize[k],mu[study[k]]);
      }else{
        log_lik[k] = binomial_logit_lpmf(dead[k]|sampleSize[k],mu[study[k]]+d[treatment[k]]-d[baseline[k]]);
      }
    }
  }
}
