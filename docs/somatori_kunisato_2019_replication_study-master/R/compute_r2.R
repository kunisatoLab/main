# R2を計算する ================================================================================
calcu_R2 <- function(data){
  # Args:
  # data: 参加者1人分のデータ
  #
  # Return:
  # 参加者1人分のR2
  
  # IVおよびIVの予測値, A, Dを抜き出す
  iv <- data %>%
    select(d0_iv:d365_iv) %>%
    as.numeric() # ベクトル化
  A <- 1000
  D <- c(0, 2, 30, 180, 365)
  
  # 双曲割引関数による予測値を計算
  iv_hdf <- data %>%
    select(d0_iv_hdf_pred:d365_iv_hdf_pred) %>%
    as.numeric()
  
  # 指数関数による予測値を計算
  iv_exp <- data %>%
    select(d0_iv_exp_pred:d365_iv_exp_pred) %>%
    as.numeric()
  
  # q-指数関数による予測値を計算
  iv_qexp <- data %>%
    select(d0_iv_qexp_pred:d365_iv_qexp_pred) %>%
    as.numeric()
  
  # R2を計算しデータに結合
  data <- data %>%
    mutate(R2_hdf = 1-sum((iv-iv_hdf)^2)/sum((iv)^2),
           R2_exp = 1-sum((iv-iv_exp)^2)/sum((iv)^2),
           R2_qexp = 1-sum((iv-iv_qexp)^2)/sum((iv)^2),
           meanR2 = mean(c(R2_hdf, R2_exp, R2_qexp))) # 可視化する際に使用
  
  return(data)
}