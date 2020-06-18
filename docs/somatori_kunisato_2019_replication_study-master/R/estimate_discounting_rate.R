# 双曲割引関数を用いて割引率を推定する ========================================================
mutate_hdf <- function(data, iteration){
  # Args:
  # data: 参加者1人分のデータ
  # iteration: 最尤推定を実施する際に初期値を変えて推定を繰り返す回数
  #
  # Return:
  # 参加者1人分の割引率および推定時に得られた諸変数
  
  # 参加者1人分のデータから, IV, D(遅延時間)を抜き出す。A(遅延報酬額)を設定する
  iv <- data %>%
    select(d0_iv:d365_iv) %>%
    as.numeric() # ベクトル化
  D <- c(0, 2, 30, 180, 365)
  A <- 1000
  
  # 対数尤度関数を定義する
  loglike_hdf <- function(params, iv, A, D){
    k <- params[1]
    sigma <- params[2]
    -length(D)/2*log(sigma^2)-1/2*sum((iv-(A/(1+k*D)))^2)/sigma^2
  }
  
  # 最尤推定を行う
  fvalmin <- Inf
  for(i in 1:iteration){
    result <- optim(c(runif(1,0,1),
                      runif(1,0.0000000001,1000)),
                    loglike_hdf,
                    gr = NULL,
                    iv = iv,
                    A = A,
                    D = D,
                    method = "L-BFGS-B",
                    control = list(fnscale = -1),
                    lower = c(0, 0.0000000001),
                    upper = c(1, 1000))
    
    nll <- result$value[length(result$value)]
    
    if (nll < fvalmin) {
      params <- result$par
      ml_best <- result
      fvalmin <- nll
    }
  }
  
  # 推定した変数群をまとめてデータに結合し, 出力する
  hdf <- data.frame(result_hdf = unlist(ml_best),
                    k_hdf = params[1],
                    sigma_hdf = params[2],
                    fvalmin_hdf = fvalmin) %>%
    group_by(k_hdf, sigma_hdf, fvalmin_hdf) %>%
    nest() %>%
    rename(hdf = data)
  
  temp <- data %>%
    bind_cols(hdf)
  
  return(temp)
}

# 指数関数を用いて割引率を推定する ============================================================
mutate_exp <- function(data, iteration){
  # Args:
  # data: 参加者1人分のデータ
  # iteration: 最尤推定を実施する際に初期値を変えて推定を繰り返す回数
  #
  # Return:
  # 参加者1人分の割引率および推定時に得られた諸変数
  
  # 参加者1人分のデータから, IV, D(遅延時間)を抜き出す。A(遅延報酬額)を設定する
  iv <- data %>%
    select(d0_iv:d365_iv) %>%
    as.numeric() # ベクトル化
  A <- 1000
  D <- c(0, 2, 30, 180, 365)
  
  # 対数尤度関数を定義する
  loglike_exp <- function(params, iv, A, D){
    k <- params[1]
    sigma <- params[2]
    -length(D)/2*log(sigma^2)-1/2*sum((iv-(A*exp(-1*k*D)))^2)/sigma^2
  }
  
  # 最尤推定を行う
  fvalmin <- Inf
  for(i in 1:iteration){
    result <- optim(c(runif(1,0,1),
                      runif(1,0.0000000001,1000)),
                    loglike_exp,
                    gr = NULL,
                    iv = iv,
                    A = A,
                    D = D,
                    method = "L-BFGS-B",
                    control = list(fnscale = -1),
                    lower = c(0, 0.0000000001),
                    upper = c(1, 1000))
    
    nll <- result$value[length(result$value)]
    
    if (nll < fvalmin){
      params <- result$par
      ml_best <- result
      fvalmin <- nll
    }
  }
  
  # 推定した変数群をまとめてデータに結合し, 出力する
  exp <- data.frame(result_exp = unlist(ml_best),
                    k_exp = params[1],
                    sigma_exp = params[2],
                    fvalmin_exp = fvalmin) %>%
    group_by(k_exp, sigma_exp, fvalmin_exp) %>%
    nest() %>%
    rename(exp = data)
  
  temp <- data %>%
    bind_cols(exp)
  
  return(temp)
}

# q-指数関数を用いて割引率を推定する ==========================================================
mutate_qexp <- function(data, iteration){
  # Args:
  # data: 参加者1人分のデータ
  # iteration: 最尤推定を実施する際に初期値を変えて推定を繰り返す回数
  #
  # Return:
  # 参加者1人分の割引率および推定時に得られた諸変数
  
  # 参加者1人分のデータから, IV, D(遅延時間)を抜き出す。A(遅延報酬額)を設定する
  iv <- data %>%
    select(d0_iv:d365_iv) %>%
    as.numeric() # ベクトル化
  A <- 1000
  D <- c(0, 2, 30, 180, 365)
  
  # 対数尤度関数を定義する
  loglike_qexp <- function(params, iv, A, D){
    k <- params[1]
    q <- params[2]
    sigma <- params[3]
    -length(D)/2*log(sigma^2)-1/2*sum((iv-A/((1+(1-q)*k*D))^(1/(1-q)))^2)/sigma^2
  }
  
  # 最尤推定を行う
  fvalmin <- Inf
  for(i in 1:iteration){
    result <- optim(c(runif(1,0,1),
                      runif(1,0,1),
                      runif(1,0.0000000001,1000)),
                    loglike_qexp,
                    gr = NULL,
                    iv = iv,
                    A = A,
                    D = D,
                    method = "L-BFGS-B",
                    control = list(fnscale = -1),
                    lower = c(0, 0, 0.0000000001),
                    upper = c(1, 1, 1000))
    
    nll <- result$value[length(result$value)]
    
    if (nll < fvalmin){
      params <- result$par
      ml_best <- result
      fvalmin <- nll
    }
  }
  
  # 推定した変数群をまとめてデータに結合し, 出力する
  qexp <- data.frame(result_qexp = unlist(ml_best),
                     k_qexp = params[1],
                     q_qexp = params[2],
                     sigma_qexp = params[3],
                     fvalmin_qexp = fvalmin) %>%
    group_by(k_qexp, q_qexp, sigma_qexp, fvalmin_qexp) %>%
    nest() %>%
    rename(qexp = data)
  
  temp <- data %>%
    bind_cols(qexp)
  
  return(temp)
}