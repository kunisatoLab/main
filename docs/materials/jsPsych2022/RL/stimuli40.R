#### 呈示される２つの刺激(s1とs2)が左右のどっちに出るかを決めるリストを作る(２つの刺激がどっちにでるかはランダム)
# 空のオブジェクトを準備
left_right_s1 <- NULL
# いきなり80試行をシャッフルせずに，10試行を1ブロックにして，シャッフルを８回行う（for文で８回繰り返す)
repeat_shuffle <- 4
for (i in 1:repeat_shuffle) {
  # 1=leftか2=rightを５つずつ作成(つまり，10試行分)
  left_right_10 <- rep(1:2,5)
  # 上記をシャフル
  left_right_10shuffle <- sample(left_right_10, length(left_right_10))
  # left_right_s1に追加
  left_right_s1 <- c(left_right_s1,left_right_10shuffle)
}
# s2が右にでるか左にでるかはs1と逆なので，left_right_s1を使って逆転処理する
left_right_s2 <- 3-left_right_s1
# ifelseを使ってleft_right_s1(2)==1の時（1なのでつまりleft），"left"をそれ以外は"right"を入れたものを作成する
left_right_s1_text <- ifelse(left_right_s1==1, "left", "right")
left_right_s2_text <- ifelse(left_right_s2==1, "left", "right")
plot(left_right_s1)
plot(left_right_s2)
#### s1とs2を選んだ時のフィードバック(reward=1, punishment=0)のリストを作る
# 空のオブジェクトを準備
reward_s1 <- NULL
reward_s2 <- NULL
# いきなり80試行をシャッフルせずに，10試行を１ブロックにして，シャッフルを８回行う（for文で８回繰り返す）
# 逆転を開始するブロックも指定しておく
reverse_block <- 3
for (i in 1:repeat_shuffle) {
  # 8:2=報酬:罰（つまり4:1=報酬:罰）のリストを作ってシャッフル
  reward82 <- rep(c(1,1,1,1,0),2)
  reward82_shuffle <- sample(reward82, length(reward82))
  # 2:8=報酬:罰（つまり1:4=報酬:罰）のリストを作ってシャッフル
  reward28 <- rep(c(1,0,0,0,0),2)
  reward28_shuffle <- sample(reward28, length(reward28))
  # 1~40試行(5ブロックより前)は，s1が8:2=報酬:罰，s2が2:8=報酬:罰。41試行以降は逆転する
  if(i < reverse_block){
    reward_s1 <- c(reward_s1,reward82_shuffle)
    reward_s2 <- c(reward_s2,reward28_shuffle)
  }else{
    reward_s1 <- c(reward_s1,reward28_shuffle)
    reward_s2 <- c(reward_s2,reward82_shuffle)
  }
}
plot(reward_s1)
plot(reward_s2)
#### 左右以外の上下の位置(topから50%の位置に刺激を呈示する)や使う画像のパスの情報（今回は全施行で以下は変わらない）
# s1の設定
top_bottom_s1 = "top"
top_bottom_position_s1 = 40
image_path_s1 = "RL/stimuli/s1.jpeg"
image_width_s1 = 200
left_right_position_s1 <- 20
# s2の設定
top_bottom_s2 = "top"
top_bottom_position_s2 = 40
image_path_s2 = "RL/stimuli/s2.jpeg"
image_width_s2 = 200
left_right_position_s2 <- 20
#### 刺激リストの作成(HTML用に調整)
stimulus <- paste("[\"<p style='position: absolute; ",
                  top_bottom_s1,": ",
                  top_bottom_position_s1,"%;",
                  left_right_s1_text,": ",
                  left_right_position_s1,"%'><img src='",
                  image_path_s1,"' width='",
                  image_width_s1,"px'/></p>\",",
                  "\"<p style='position: absolute; ",
                  top_bottom_s2,": ",
                  top_bottom_position_s2,"%;",
                  left_right_s2_text,": ",
                  left_right_position_s2,"%'><img src='",
                  image_path_s2,"' width='",
                  image_width_s2,"px'/></p>\"]",sep="")
#### 上記で作ったものをデータフレーム化しておく
RL_stim <- data.frame(stimulus,
                      left_right_s1,
                      left_right_s2,
                      reward_s1,
                      reward_s2)
#### 上記で作ったデータフレームをJson形式で出力する
stimuli_file <- "exercise/RL/RL/stimuli/stimuli.txt"
file.create(stimuli_file)

for (i in 1:nrow(RL_stim)) {
  if(i==1){write("const stimuli = [",stimuli_file,append=TRUE)}
  write(paste0("{stimulus:",as.character(RL_stim$stimulus[i]),",
      data:{left_right_s1:",RL_stim$left_right_s1[i],
               ", left_right_s2:",RL_stim$left_right_s2[i],
               ", reward_s1:",RL_stim$reward_s1[i],
               ", reward_s2:",RL_stim$reward_s2[i],"}}"),stimuli_file,append=TRUE)
  if(i==nrow(RL_stim)){
    write("]",stimuli_file,append=TRUE)
  }else{
    write(",",stimuli_file,append=TRUE)
  }
}