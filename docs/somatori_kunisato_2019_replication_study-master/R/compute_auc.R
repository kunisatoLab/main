# AUCを計算する
calcu_auc <- function(data){
  # Args:
  # data: 参加者1人分のデータ
  #
  # Return:
  # 参加者1人分のAUC
  
  # 参加者1人分のIVおよびDを抜き出す
  iv <- data %>%
    select(d0_iv:d365_iv) %>%
    as.numeric() 
  D <- c(0, 2, 30, 180, 365)
  
  # AUCが0-1になるように, IVおよびDを正規化
  iv <- iv/1000
  D <- D/365
  
  # AUCを計算
  temp <- sum(diff(D) * (iv[-1] + iv[-length(iv)]))/2
  
  data <- data %>%
    mutate(auc = temp)
  
  return(data)
}