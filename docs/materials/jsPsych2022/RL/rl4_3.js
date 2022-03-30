/* 課題に関するコードを以下に書く */
const instruction = {
  type: jsPsychHtmlKeyboardResponse,
  stimulus: "<p style='text-align:left'>これから画面に２つの図形がでてきますので，どちらかの図形を選択してください。</p>"+
  "<p style='text-align:left'>あなたの選択に対して，ポジティブな反応（緑色の笑顔）かネガティブな反応（赤色の悲しい顔）が返ってきます。</p>"+
  "<p style='text-align:left'>一方の図形はポジティブな反応になりやすく，もう一方はそうではありません。</p>"+
  "<p style='text-align:left'>できるだけ，ポジティブな反応が得られるように，選択をしてください。</p>"+
  "<p><br></p>"+
  "<p style='text-align:left'>なお，図形と返ってくる反応との関係は途中で変わることがあります。</p>"+
  "<p style='text-align:left'>また，図形の出る位置（左右）は頻繁に変わります。<br></p>"+
  "<p><br></p>"+
  "<p style='text-align:left'>それでは，キーボードのキーをどれか押して，課題を始めてください。</p>"
};

const stimuli = [
{stimulus:["<p style='position: absolute; top: 40%;right: 20%'><img src='RL/stimuli/s1.jpeg' width='200px'/></p>","<p style='position: absolute; top: 40%;left: 20%'><img src='RL/stimuli/s2.jpeg' width='200px'/></p>"],
      data:{left_right_s1:2, left_right_s2:1, reward_s1:1, reward_s2:1}}
,
{stimulus:["<p style='position: absolute; top: 40%;right: 20%'><img src='RL/stimuli/s1.jpeg' width='200px'/></p>","<p style='position: absolute; top: 40%;left: 20%'><img src='RL/stimuli/s2.jpeg' width='200px'/></p>"],
      data:{left_right_s1:2, left_right_s2:1, reward_s1:1, reward_s2:0}}
,
{stimulus:["<p style='position: absolute; top: 40%;left: 20%'><img src='RL/stimuli/s1.jpeg' width='200px'/></p>","<p style='position: absolute; top: 40%;right: 20%'><img src='RL/stimuli/s2.jpeg' width='200px'/></p>"],
      data:{left_right_s1:1, left_right_s2:2, reward_s1:0, reward_s2:0}}
,
{stimulus:["<p style='position: absolute; top: 40%;left: 20%'><img src='RL/stimuli/s1.jpeg' width='200px'/></p>","<p style='position: absolute; top: 40%;right: 20%'><img src='RL/stimuli/s2.jpeg' width='200px'/></p>"],
      data:{left_right_s1:1, left_right_s2:2, reward_s1:1, reward_s2:0}}
,
{stimulus:["<p style='position: absolute; top: 40%;right: 20%'><img src='RL/stimuli/s1.jpeg' width='200px'/></p>","<p style='position: absolute; top: 40%;left: 20%'><img src='RL/stimuli/s2.jpeg' width='200px'/></p>"],
      data:{left_right_s1:2, left_right_s2:1, reward_s1:1, reward_s2:0}}
,
{stimulus:["<p style='position: absolute; top: 40%;right: 20%'><img src='RL/stimuli/s1.jpeg' width='200px'/></p>","<p style='position: absolute; top: 40%;left: 20%'><img src='RL/stimuli/s2.jpeg' width='200px'/></p>"],
      data:{left_right_s1:2, left_right_s2:1, reward_s1:1, reward_s2:0}}
,
{stimulus:["<p style='position: absolute; top: 40%;left: 20%'><img src='RL/stimuli/s1.jpeg' width='200px'/></p>","<p style='position: absolute; top: 40%;right: 20%'><img src='RL/stimuli/s2.jpeg' width='200px'/></p>"],
      data:{left_right_s1:1, left_right_s2:2, reward_s1:1, reward_s2:0}}
,
{stimulus:["<p style='position: absolute; top: 40%;right: 20%'><img src='RL/stimuli/s1.jpeg' width='200px'/></p>","<p style='position: absolute; top: 40%;left: 20%'><img src='RL/stimuli/s2.jpeg' width='200px'/></p>"],
      data:{left_right_s1:2, left_right_s2:1, reward_s1:1, reward_s2:0}}
,
{stimulus:["<p style='position: absolute; top: 40%;left: 20%'><img src='RL/stimuli/s1.jpeg' width='200px'/></p>","<p style='position: absolute; top: 40%;right: 20%'><img src='RL/stimuli/s2.jpeg' width='200px'/></p>"],
      data:{left_right_s1:1, left_right_s2:2, reward_s1:0, reward_s2:1}}
,
{stimulus:["<p style='position: absolute; top: 40%;left: 20%'><img src='RL/stimuli/s1.jpeg' width='200px'/></p>","<p style='position: absolute; top: 40%;right: 20%'><img src='RL/stimuli/s2.jpeg' width='200px'/></p>"],
      data:{left_right_s1:1, left_right_s2:2, reward_s1:1, reward_s2:0}}
,
{stimulus:["<p style='position: absolute; top: 40%;right: 20%'><img src='RL/stimuli/s1.jpeg' width='200px'/></p>","<p style='position: absolute; top: 40%;left: 20%'><img src='RL/stimuli/s2.jpeg' width='200px'/></p>"],
      data:{left_right_s1:2, left_right_s2:1, reward_s1:1, reward_s2:0}}
,
{stimulus:["<p style='position: absolute; top: 40%;left: 20%'><img src='RL/stimuli/s1.jpeg' width='200px'/></p>","<p style='position: absolute; top: 40%;right: 20%'><img src='RL/stimuli/s2.jpeg' width='200px'/></p>"],
      data:{left_right_s1:1, left_right_s2:2, reward_s1:1, reward_s2:0}}
,
{stimulus:["<p style='position: absolute; top: 40%;left: 20%'><img src='RL/stimuli/s1.jpeg' width='200px'/></p>","<p style='position: absolute; top: 40%;right: 20%'><img src='RL/stimuli/s2.jpeg' width='200px'/></p>"],
      data:{left_right_s1:1, left_right_s2:2, reward_s1:1, reward_s2:0}}
,
{stimulus:["<p style='position: absolute; top: 40%;left: 20%'><img src='RL/stimuli/s1.jpeg' width='200px'/></p>","<p style='position: absolute; top: 40%;right: 20%'><img src='RL/stimuli/s2.jpeg' width='200px'/></p>"],
      data:{left_right_s1:1, left_right_s2:2, reward_s1:1, reward_s2:0}}
,
{stimulus:["<p style='position: absolute; top: 40%;left: 20%'><img src='RL/stimuli/s1.jpeg' width='200px'/></p>","<p style='position: absolute; top: 40%;right: 20%'><img src='RL/stimuli/s2.jpeg' width='200px'/></p>"],
      data:{left_right_s1:1, left_right_s2:2, reward_s1:1, reward_s2:0}}
,
{stimulus:["<p style='position: absolute; top: 40%;right: 20%'><img src='RL/stimuli/s1.jpeg' width='200px'/></p>","<p style='position: absolute; top: 40%;left: 20%'><img src='RL/stimuli/s2.jpeg' width='200px'/></p>"],
      data:{left_right_s1:2, left_right_s2:1, reward_s1:0, reward_s2:1}}
,
{stimulus:["<p style='position: absolute; top: 40%;right: 20%'><img src='RL/stimuli/s1.jpeg' width='200px'/></p>","<p style='position: absolute; top: 40%;left: 20%'><img src='RL/stimuli/s2.jpeg' width='200px'/></p>"],
      data:{left_right_s1:2, left_right_s2:1, reward_s1:0, reward_s2:0}}
,
{stimulus:["<p style='position: absolute; top: 40%;right: 20%'><img src='RL/stimuli/s1.jpeg' width='200px'/></p>","<p style='position: absolute; top: 40%;left: 20%'><img src='RL/stimuli/s2.jpeg' width='200px'/></p>"],
      data:{left_right_s1:2, left_right_s2:1, reward_s1:1, reward_s2:0}}
,
{stimulus:["<p style='position: absolute; top: 40%;right: 20%'><img src='RL/stimuli/s1.jpeg' width='200px'/></p>","<p style='position: absolute; top: 40%;left: 20%'><img src='RL/stimuli/s2.jpeg' width='200px'/></p>"],
      data:{left_right_s1:2, left_right_s2:1, reward_s1:1, reward_s2:0}}
,
{stimulus:["<p style='position: absolute; top: 40%;left: 20%'><img src='RL/stimuli/s1.jpeg' width='200px'/></p>","<p style='position: absolute; top: 40%;right: 20%'><img src='RL/stimuli/s2.jpeg' width='200px'/></p>"],
      data:{left_right_s1:1, left_right_s2:2, reward_s1:1, reward_s2:1}}
,
{stimulus:["<p style='position: absolute; top: 40%;left: 20%'><img src='RL/stimuli/s1.jpeg' width='200px'/></p>","<p style='position: absolute; top: 40%;right: 20%'><img src='RL/stimuli/s2.jpeg' width='200px'/></p>"],
      data:{left_right_s1:1, left_right_s2:2, reward_s1:1, reward_s2:1}}
,
{stimulus:["<p style='position: absolute; top: 40%;left: 20%'><img src='RL/stimuli/s1.jpeg' width='200px'/></p>","<p style='position: absolute; top: 40%;right: 20%'><img src='RL/stimuli/s2.jpeg' width='200px'/></p>"],
      data:{left_right_s1:1, left_right_s2:2, reward_s1:0, reward_s2:0}}
,
{stimulus:["<p style='position: absolute; top: 40%;right: 20%'><img src='RL/stimuli/s1.jpeg' width='200px'/></p>","<p style='position: absolute; top: 40%;left: 20%'><img src='RL/stimuli/s2.jpeg' width='200px'/></p>"],
      data:{left_right_s1:2, left_right_s2:1, reward_s1:1, reward_s2:0}}
,
{stimulus:["<p style='position: absolute; top: 40%;right: 20%'><img src='RL/stimuli/s1.jpeg' width='200px'/></p>","<p style='position: absolute; top: 40%;left: 20%'><img src='RL/stimuli/s2.jpeg' width='200px'/></p>"],
      data:{left_right_s1:2, left_right_s2:1, reward_s1:1, reward_s2:0}}
,
{stimulus:["<p style='position: absolute; top: 40%;left: 20%'><img src='RL/stimuli/s1.jpeg' width='200px'/></p>","<p style='position: absolute; top: 40%;right: 20%'><img src='RL/stimuli/s2.jpeg' width='200px'/></p>"],
      data:{left_right_s1:1, left_right_s2:2, reward_s1:1, reward_s2:1}}
,
{stimulus:["<p style='position: absolute; top: 40%;right: 20%'><img src='RL/stimuli/s1.jpeg' width='200px'/></p>","<p style='position: absolute; top: 40%;left: 20%'><img src='RL/stimuli/s2.jpeg' width='200px'/></p>"],
      data:{left_right_s1:2, left_right_s2:1, reward_s1:1, reward_s2:0}}
,
{stimulus:["<p style='position: absolute; top: 40%;right: 20%'><img src='RL/stimuli/s1.jpeg' width='200px'/></p>","<p style='position: absolute; top: 40%;left: 20%'><img src='RL/stimuli/s2.jpeg' width='200px'/></p>"],
      data:{left_right_s1:2, left_right_s2:1, reward_s1:1, reward_s2:0}}
,
{stimulus:["<p style='position: absolute; top: 40%;left: 20%'><img src='RL/stimuli/s1.jpeg' width='200px'/></p>","<p style='position: absolute; top: 40%;right: 20%'><img src='RL/stimuli/s2.jpeg' width='200px'/></p>"],
      data:{left_right_s1:1, left_right_s2:2, reward_s1:1, reward_s2:0}}
,
{stimulus:["<p style='position: absolute; top: 40%;right: 20%'><img src='RL/stimuli/s1.jpeg' width='200px'/></p>","<p style='position: absolute; top: 40%;left: 20%'><img src='RL/stimuli/s2.jpeg' width='200px'/></p>"],
      data:{left_right_s1:2, left_right_s2:1, reward_s1:1, reward_s2:0}}
,
{stimulus:["<p style='position: absolute; top: 40%;left: 20%'><img src='RL/stimuli/s1.jpeg' width='200px'/></p>","<p style='position: absolute; top: 40%;right: 20%'><img src='RL/stimuli/s2.jpeg' width='200px'/></p>"],
      data:{left_right_s1:1, left_right_s2:2, reward_s1:0, reward_s2:0}}
,
{stimulus:["<p style='position: absolute; top: 40%;left: 20%'><img src='RL/stimuli/s1.jpeg' width='200px'/></p>","<p style='position: absolute; top: 40%;right: 20%'><img src='RL/stimuli/s2.jpeg' width='200px'/></p>"],
      data:{left_right_s1:1, left_right_s2:2, reward_s1:0, reward_s2:0}}
,
{stimulus:["<p style='position: absolute; top: 40%;left: 20%'><img src='RL/stimuli/s1.jpeg' width='200px'/></p>","<p style='position: absolute; top: 40%;right: 20%'><img src='RL/stimuli/s2.jpeg' width='200px'/></p>"],
      data:{left_right_s1:1, left_right_s2:2, reward_s1:1, reward_s2:0}}
,
{stimulus:["<p style='position: absolute; top: 40%;right: 20%'><img src='RL/stimuli/s1.jpeg' width='200px'/></p>","<p style='position: absolute; top: 40%;left: 20%'><img src='RL/stimuli/s2.jpeg' width='200px'/></p>"],
      data:{left_right_s1:2, left_right_s2:1, reward_s1:1, reward_s2:1}}
,
{stimulus:["<p style='position: absolute; top: 40%;right: 20%'><img src='RL/stimuli/s1.jpeg' width='200px'/></p>","<p style='position: absolute; top: 40%;left: 20%'><img src='RL/stimuli/s2.jpeg' width='200px'/></p>"],
      data:{left_right_s1:2, left_right_s2:1, reward_s1:1, reward_s2:0}}
,
{stimulus:["<p style='position: absolute; top: 40%;left: 20%'><img src='RL/stimuli/s1.jpeg' width='200px'/></p>","<p style='position: absolute; top: 40%;right: 20%'><img src='RL/stimuli/s2.jpeg' width='200px'/></p>"],
      data:{left_right_s1:1, left_right_s2:2, reward_s1:1, reward_s2:0}}
,
{stimulus:["<p style='position: absolute; top: 40%;left: 20%'><img src='RL/stimuli/s1.jpeg' width='200px'/></p>","<p style='position: absolute; top: 40%;right: 20%'><img src='RL/stimuli/s2.jpeg' width='200px'/></p>"],
      data:{left_right_s1:1, left_right_s2:2, reward_s1:1, reward_s2:0}}
,
{stimulus:["<p style='position: absolute; top: 40%;right: 20%'><img src='RL/stimuli/s1.jpeg' width='200px'/></p>","<p style='position: absolute; top: 40%;left: 20%'><img src='RL/stimuli/s2.jpeg' width='200px'/></p>"],
      data:{left_right_s1:2, left_right_s2:1, reward_s1:0, reward_s2:0}}
,
{stimulus:["<p style='position: absolute; top: 40%;right: 20%'><img src='RL/stimuli/s1.jpeg' width='200px'/></p>","<p style='position: absolute; top: 40%;left: 20%'><img src='RL/stimuli/s2.jpeg' width='200px'/></p>"],
      data:{left_right_s1:2, left_right_s2:1, reward_s1:1, reward_s2:0}}
,
{stimulus:["<p style='position: absolute; top: 40%;right: 20%'><img src='RL/stimuli/s1.jpeg' width='200px'/></p>","<p style='position: absolute; top: 40%;left: 20%'><img src='RL/stimuli/s2.jpeg' width='200px'/></p>"],
      data:{left_right_s1:2, left_right_s2:1, reward_s1:1, reward_s2:0}}
,
{stimulus:["<p style='position: absolute; top: 40%;left: 20%'><img src='RL/stimuli/s1.jpeg' width='200px'/></p>","<p style='position: absolute; top: 40%;right: 20%'><img src='RL/stimuli/s2.jpeg' width='200px'/></p>"],
      data:{left_right_s1:1, left_right_s2:2, reward_s1:1, reward_s2:1}}
,
{stimulus:["<p style='position: absolute; top: 40%;right: 20%'><img src='RL/stimuli/s1.jpeg' width='200px'/></p>","<p style='position: absolute; top: 40%;left: 20%'><img src='RL/stimuli/s2.jpeg' width='200px'/></p>"],
      data:{left_right_s1:2, left_right_s2:1, reward_s1:0, reward_s2:1}}
,
{stimulus:["<p style='position: absolute; top: 40%;right: 20%'><img src='RL/stimuli/s1.jpeg' width='200px'/></p>","<p style='position: absolute; top: 40%;left: 20%'><img src='RL/stimuli/s2.jpeg' width='200px'/></p>"],
      data:{left_right_s1:2, left_right_s2:1, reward_s1:0, reward_s2:1}}
,
{stimulus:["<p style='position: absolute; top: 40%;right: 20%'><img src='RL/stimuli/s1.jpeg' width='200px'/></p>","<p style='position: absolute; top: 40%;left: 20%'><img src='RL/stimuli/s2.jpeg' width='200px'/></p>"],
      data:{left_right_s1:2, left_right_s2:1, reward_s1:0, reward_s2:0}}
,
{stimulus:["<p style='position: absolute; top: 40%;left: 20%'><img src='RL/stimuli/s1.jpeg' width='200px'/></p>","<p style='position: absolute; top: 40%;right: 20%'><img src='RL/stimuli/s2.jpeg' width='200px'/></p>"],
      data:{left_right_s1:1, left_right_s2:2, reward_s1:0, reward_s2:1}}
,
{stimulus:["<p style='position: absolute; top: 40%;left: 20%'><img src='RL/stimuli/s1.jpeg' width='200px'/></p>","<p style='position: absolute; top: 40%;right: 20%'><img src='RL/stimuli/s2.jpeg' width='200px'/></p>"],
      data:{left_right_s1:1, left_right_s2:2, reward_s1:0, reward_s2:1}}
,
{stimulus:["<p style='position: absolute; top: 40%;left: 20%'><img src='RL/stimuli/s1.jpeg' width='200px'/></p>","<p style='position: absolute; top: 40%;right: 20%'><img src='RL/stimuli/s2.jpeg' width='200px'/></p>"],
      data:{left_right_s1:1, left_right_s2:2, reward_s1:1, reward_s2:1}}
,
{stimulus:["<p style='position: absolute; top: 40%;right: 20%'><img src='RL/stimuli/s1.jpeg' width='200px'/></p>","<p style='position: absolute; top: 40%;left: 20%'><img src='RL/stimuli/s2.jpeg' width='200px'/></p>"],
      data:{left_right_s1:2, left_right_s2:1, reward_s1:1, reward_s2:1}}
,
{stimulus:["<p style='position: absolute; top: 40%;left: 20%'><img src='RL/stimuli/s1.jpeg' width='200px'/></p>","<p style='position: absolute; top: 40%;right: 20%'><img src='RL/stimuli/s2.jpeg' width='200px'/></p>"],
      data:{left_right_s1:1, left_right_s2:2, reward_s1:0, reward_s2:0}}
,
{stimulus:["<p style='position: absolute; top: 40%;left: 20%'><img src='RL/stimuli/s1.jpeg' width='200px'/></p>","<p style='position: absolute; top: 40%;right: 20%'><img src='RL/stimuli/s2.jpeg' width='200px'/></p>"],
      data:{left_right_s1:1, left_right_s2:2, reward_s1:0, reward_s2:1}}
,
{stimulus:["<p style='position: absolute; top: 40%;right: 20%'><img src='RL/stimuli/s1.jpeg' width='200px'/></p>","<p style='position: absolute; top: 40%;left: 20%'><img src='RL/stimuli/s2.jpeg' width='200px'/></p>"],
      data:{left_right_s1:2, left_right_s2:1, reward_s1:0, reward_s2:1}}
,
{stimulus:["<p style='position: absolute; top: 40%;right: 20%'><img src='RL/stimuli/s1.jpeg' width='200px'/></p>","<p style='position: absolute; top: 40%;left: 20%'><img src='RL/stimuli/s2.jpeg' width='200px'/></p>"],
      data:{left_right_s1:2, left_right_s2:1, reward_s1:0, reward_s2:1}}
,
{stimulus:["<p style='position: absolute; top: 40%;left: 20%'><img src='RL/stimuli/s1.jpeg' width='200px'/></p>","<p style='position: absolute; top: 40%;right: 20%'><img src='RL/stimuli/s2.jpeg' width='200px'/></p>"],
      data:{left_right_s1:1, left_right_s2:2, reward_s1:0, reward_s2:1}}
,
{stimulus:["<p style='position: absolute; top: 40%;right: 20%'><img src='RL/stimuli/s1.jpeg' width='200px'/></p>","<p style='position: absolute; top: 40%;left: 20%'><img src='RL/stimuli/s2.jpeg' width='200px'/></p>"],
      data:{left_right_s1:2, left_right_s2:1, reward_s1:1, reward_s2:1}}
,
{stimulus:["<p style='position: absolute; top: 40%;left: 20%'><img src='RL/stimuli/s1.jpeg' width='200px'/></p>","<p style='position: absolute; top: 40%;right: 20%'><img src='RL/stimuli/s2.jpeg' width='200px'/></p>"],
      data:{left_right_s1:1, left_right_s2:2, reward_s1:1, reward_s2:1}}
,
{stimulus:["<p style='position: absolute; top: 40%;left: 20%'><img src='RL/stimuli/s1.jpeg' width='200px'/></p>","<p style='position: absolute; top: 40%;right: 20%'><img src='RL/stimuli/s2.jpeg' width='200px'/></p>"],
      data:{left_right_s1:1, left_right_s2:2, reward_s1:0, reward_s2:0}}
,
{stimulus:["<p style='position: absolute; top: 40%;left: 20%'><img src='RL/stimuli/s1.jpeg' width='200px'/></p>","<p style='position: absolute; top: 40%;right: 20%'><img src='RL/stimuli/s2.jpeg' width='200px'/></p>"],
      data:{left_right_s1:1, left_right_s2:2, reward_s1:0, reward_s2:1}}
,
{stimulus:["<p style='position: absolute; top: 40%;left: 20%'><img src='RL/stimuli/s1.jpeg' width='200px'/></p>","<p style='position: absolute; top: 40%;right: 20%'><img src='RL/stimuli/s2.jpeg' width='200px'/></p>"],
      data:{left_right_s1:1, left_right_s2:2, reward_s1:0, reward_s2:1}}
,
{stimulus:["<p style='position: absolute; top: 40%;right: 20%'><img src='RL/stimuli/s1.jpeg' width='200px'/></p>","<p style='position: absolute; top: 40%;left: 20%'><img src='RL/stimuli/s2.jpeg' width='200px'/></p>"],
      data:{left_right_s1:2, left_right_s2:1, reward_s1:0, reward_s2:0}}
,
{stimulus:["<p style='position: absolute; top: 40%;right: 20%'><img src='RL/stimuli/s1.jpeg' width='200px'/></p>","<p style='position: absolute; top: 40%;left: 20%'><img src='RL/stimuli/s2.jpeg' width='200px'/></p>"],
      data:{left_right_s1:2, left_right_s2:1, reward_s1:0, reward_s2:1}}
,
{stimulus:["<p style='position: absolute; top: 40%;right: 20%'><img src='RL/stimuli/s1.jpeg' width='200px'/></p>","<p style='position: absolute; top: 40%;left: 20%'><img src='RL/stimuli/s2.jpeg' width='200px'/></p>"],
      data:{left_right_s1:2, left_right_s2:1, reward_s1:0, reward_s2:1}}
,
{stimulus:["<p style='position: absolute; top: 40%;right: 20%'><img src='RL/stimuli/s1.jpeg' width='200px'/></p>","<p style='position: absolute; top: 40%;left: 20%'><img src='RL/stimuli/s2.jpeg' width='200px'/></p>"],
      data:{left_right_s1:2, left_right_s2:1, reward_s1:0, reward_s2:1}}
,
{stimulus:["<p style='position: absolute; top: 40%;left: 20%'><img src='RL/stimuli/s1.jpeg' width='200px'/></p>","<p style='position: absolute; top: 40%;right: 20%'><img src='RL/stimuli/s2.jpeg' width='200px'/></p>"],
      data:{left_right_s1:1, left_right_s2:2, reward_s1:0, reward_s2:1}}
,
{stimulus:["<p style='position: absolute; top: 40%;left: 20%'><img src='RL/stimuli/s1.jpeg' width='200px'/></p>","<p style='position: absolute; top: 40%;right: 20%'><img src='RL/stimuli/s2.jpeg' width='200px'/></p>"],
      data:{left_right_s1:1, left_right_s2:2, reward_s1:0, reward_s2:1}}
,
{stimulus:["<p style='position: absolute; top: 40%;right: 20%'><img src='RL/stimuli/s1.jpeg' width='200px'/></p>","<p style='position: absolute; top: 40%;left: 20%'><img src='RL/stimuli/s2.jpeg' width='200px'/></p>"],
      data:{left_right_s1:2, left_right_s2:1, reward_s1:0, reward_s2:1}}
,
{stimulus:["<p style='position: absolute; top: 40%;right: 20%'><img src='RL/stimuli/s1.jpeg' width='200px'/></p>","<p style='position: absolute; top: 40%;left: 20%'><img src='RL/stimuli/s2.jpeg' width='200px'/></p>"],
      data:{left_right_s1:2, left_right_s2:1, reward_s1:0, reward_s2:1}}
,
{stimulus:["<p style='position: absolute; top: 40%;left: 20%'><img src='RL/stimuli/s1.jpeg' width='200px'/></p>","<p style='position: absolute; top: 40%;right: 20%'><img src='RL/stimuli/s2.jpeg' width='200px'/></p>"],
      data:{left_right_s1:1, left_right_s2:2, reward_s1:0, reward_s2:1}}
,
{stimulus:["<p style='position: absolute; top: 40%;left: 20%'><img src='RL/stimuli/s1.jpeg' width='200px'/></p>","<p style='position: absolute; top: 40%;right: 20%'><img src='RL/stimuli/s2.jpeg' width='200px'/></p>"],
      data:{left_right_s1:1, left_right_s2:2, reward_s1:0, reward_s2:0}}
,
{stimulus:["<p style='position: absolute; top: 40%;right: 20%'><img src='RL/stimuli/s1.jpeg' width='200px'/></p>","<p style='position: absolute; top: 40%;left: 20%'><img src='RL/stimuli/s2.jpeg' width='200px'/></p>"],
      data:{left_right_s1:2, left_right_s2:1, reward_s1:1, reward_s2:0}}
,
{stimulus:["<p style='position: absolute; top: 40%;left: 20%'><img src='RL/stimuli/s1.jpeg' width='200px'/></p>","<p style='position: absolute; top: 40%;right: 20%'><img src='RL/stimuli/s2.jpeg' width='200px'/></p>"],
      data:{left_right_s1:1, left_right_s2:2, reward_s1:1, reward_s2:1}}
,
{stimulus:["<p style='position: absolute; top: 40%;right: 20%'><img src='RL/stimuli/s1.jpeg' width='200px'/></p>","<p style='position: absolute; top: 40%;left: 20%'><img src='RL/stimuli/s2.jpeg' width='200px'/></p>"],
      data:{left_right_s1:2, left_right_s2:1, reward_s1:0, reward_s2:1}}
,
{stimulus:["<p style='position: absolute; top: 40%;left: 20%'><img src='RL/stimuli/s1.jpeg' width='200px'/></p>","<p style='position: absolute; top: 40%;right: 20%'><img src='RL/stimuli/s2.jpeg' width='200px'/></p>"],
      data:{left_right_s1:1, left_right_s2:2, reward_s1:1, reward_s2:0}}
,
{stimulus:["<p style='position: absolute; top: 40%;right: 20%'><img src='RL/stimuli/s1.jpeg' width='200px'/></p>","<p style='position: absolute; top: 40%;left: 20%'><img src='RL/stimuli/s2.jpeg' width='200px'/></p>"],
      data:{left_right_s1:2, left_right_s2:1, reward_s1:0, reward_s2:1}}
,
{stimulus:["<p style='position: absolute; top: 40%;right: 20%'><img src='RL/stimuli/s1.jpeg' width='200px'/></p>","<p style='position: absolute; top: 40%;left: 20%'><img src='RL/stimuli/s2.jpeg' width='200px'/></p>"],
      data:{left_right_s1:2, left_right_s2:1, reward_s1:1, reward_s2:1}}
,
{stimulus:["<p style='position: absolute; top: 40%;left: 20%'><img src='RL/stimuli/s1.jpeg' width='200px'/></p>","<p style='position: absolute; top: 40%;right: 20%'><img src='RL/stimuli/s2.jpeg' width='200px'/></p>"],
      data:{left_right_s1:1, left_right_s2:2, reward_s1:0, reward_s2:1}}
,
{stimulus:["<p style='position: absolute; top: 40%;left: 20%'><img src='RL/stimuli/s1.jpeg' width='200px'/></p>","<p style='position: absolute; top: 40%;right: 20%'><img src='RL/stimuli/s2.jpeg' width='200px'/></p>"],
      data:{left_right_s1:1, left_right_s2:2, reward_s1:0, reward_s2:1}}
,
{stimulus:["<p style='position: absolute; top: 40%;left: 20%'><img src='RL/stimuli/s1.jpeg' width='200px'/></p>","<p style='position: absolute; top: 40%;right: 20%'><img src='RL/stimuli/s2.jpeg' width='200px'/></p>"],
      data:{left_right_s1:1, left_right_s2:2, reward_s1:0, reward_s2:1}}
,
{stimulus:["<p style='position: absolute; top: 40%;left: 20%'><img src='RL/stimuli/s1.jpeg' width='200px'/></p>","<p style='position: absolute; top: 40%;right: 20%'><img src='RL/stimuli/s2.jpeg' width='200px'/></p>"],
      data:{left_right_s1:1, left_right_s2:2, reward_s1:0, reward_s2:1}}
,
{stimulus:["<p style='position: absolute; top: 40%;right: 20%'><img src='RL/stimuli/s1.jpeg' width='200px'/></p>","<p style='position: absolute; top: 40%;left: 20%'><img src='RL/stimuli/s2.jpeg' width='200px'/></p>"],
      data:{left_right_s1:2, left_right_s2:1, reward_s1:0, reward_s2:0}}
,
{stimulus:["<p style='position: absolute; top: 40%;right: 20%'><img src='RL/stimuli/s1.jpeg' width='200px'/></p>","<p style='position: absolute; top: 40%;left: 20%'><img src='RL/stimuli/s2.jpeg' width='200px'/></p>"],
      data:{left_right_s1:2, left_right_s2:1, reward_s1:0, reward_s2:1}}
,
{stimulus:["<p style='position: absolute; top: 40%;right: 20%'><img src='RL/stimuli/s1.jpeg' width='200px'/></p>","<p style='position: absolute; top: 40%;left: 20%'><img src='RL/stimuli/s2.jpeg' width='200px'/></p>"],
      data:{left_right_s1:2, left_right_s2:1, reward_s1:0, reward_s2:1}}
]

const choice = {
  timeline:[{
    stimulus: '',
    type: jsPsychHtmlButtonResponse,
    choices: jsPsych.timelineVariable('stimulus'),
    button_html: '%choice%',
    trial_duration: 2000,
    data: jsPsych.timelineVariable('data')
  　},{
    type: jsPsychHtmlButtonResponse,
    stimulus: '',
    choices:  function(){
      var last_select = jsPsych.data.get().last(1).values()[0].response;
      var last_left_right_s1 = jsPsych.data.get().last(1).values()[0].left_right_s1;
      if (last_select==0 && last_left_right_s1 == 1){
        return ["<p style='position: absolute; top: 40%;left: 20%'><img src='RL/stimuli/s1s.jpeg' width='200px'/></p> <p style='position: absolute; top: 40%;right: 20%'><img src='RL/stimuli/s2.jpeg' width='200px'/></p>"]
      } else if (last_select==0 && last_left_right_s1 == 2){
        return ["<p style='position: absolute; top: 40%;right: 20%'><img src='RL/stimuli/s1s.jpeg' width='200px'/></p> <p style='position: absolute; top: 40%;left: 20%'><img src='RL/stimuli/s2.jpeg' width='200px'/></p>"]
      } else if (last_select==1 && last_left_right_s1 == 1){
        return ["<p style='position: absolute; top: 40%;left: 20%'><img src='RL/stimuli/s1.jpeg' width='200px'/></p> <p style='position: absolute; top: 40%;right: 20%'><img src='RL/stimuli/s2s.jpeg' width='200px'/></p>"]
      } else if (last_select==1 && last_left_right_s1 == 2){
        return ["<p style='position: absolute; top: 40%;right: 20%'><img src='RL/stimuli/s1.jpeg' width='200px'/></p> <p style='position: absolute; top: 40%;left: 20%'><img src='RL/stimuli/s2s.jpeg' width='200px'/></p>"]
      } else {
        return ['<p style="font-size: 48px">時間内に選択を行ってください</p>']
      }
    },
    button_html: '%choice%',
    trial_duration: 500,
    response_ends_trial: false,
  },{
      type: jsPsychHtmlButtonResponse,
      stimulus: '',
      choices: function(){
        var last_select = jsPsych.data.get().last(2).values()[0].response;
        var last_left_right_s1 = jsPsych.data.get().last(2).values()[0].left_right_s1;
        var last_reward_s1 = jsPsych.data.get().last(2).values()[0].reward_s1;
        var last_reward_s2 = jsPsych.data.get().last(2).values()[0].reward_s2;
        if (last_select==0 && last_left_right_s1 == 1 && last_reward_s1==1){
           return ["<p style='position: absolute; top: 40%;left: 20%'><img src='RL/stimuli/s1s.jpeg' width='200px'/></p> <p style='position: absolute; top: 40%;right: 20%'><img src='RL/stimuli/s2.jpeg' width='200px'/></p> <p style='position: absolute; top: 40%;right: 45%'><img src='RL/stimuli/reward.jpeg' width='200px'/></p>"]
        } else if (last_select==0 && last_left_right_s1 == 1 && last_reward_s1==0){
           return ["<p style='position: absolute; top: 40%;left: 20%'><img src='RL/stimuli/s1s.jpeg' width='200px'/></p> <p style='position: absolute; top: 40%;right: 20%'><img src='RL/stimuli/s2.jpeg' width='200px'/></p> <p style='position: absolute; top: 40%;right: 45%'><img src='RL/stimuli/punishment.jpeg' width='200px'/></p>"]
        }else if (last_select==0 && last_left_right_s1 == 2 && last_reward_s1==1){
           return ["<p style='position: absolute; top: 40%;right: 20%'><img src='RL/stimuli/s1s.jpeg' width='200px'/></p> <p style='position: absolute; top: 40%;left: 20%'><img src='RL/stimuli/s2.jpeg' width='200px'/></p> <p style='position: absolute; top: 40%;right: 45%'><img src='RL/stimuli/reward.jpeg' width='200px'/></p>"]
        } else if (last_select==0 && last_left_right_s1 == 2 && last_reward_s1==0){
           return ["<p style='position: absolute; top: 40%;right: 20%'><img src='RL/stimuli/s1s.jpeg' width='200px'/></p> <p style='position: absolute; top: 40%;left: 20%'><img src='RL/stimuli/s2.jpeg' width='200px'/></p> <p style='position: absolute; top: 40%;right: 45%'><img src='RL/stimuli/punishment.jpeg' width='200px'/></p>"]
        } else if (last_select==1 && last_left_right_s1 == 1 && last_reward_s2==1){
           return ["<p style='position: absolute; top: 40%;left: 20%'><img src='RL/stimuli/s1.jpeg' width='200px'/></p> <p style='position: absolute; top: 40%;right: 20%'><img src='RL/stimuli/s2s.jpeg' width='200px'/></p> <p style='position: absolute; top: 40%;right: 45%'><img src='RL/stimuli/reward.jpeg' width='200px'/></p>"]
        } else if (last_select==1 && last_left_right_s1 == 1 && last_reward_s2==0){
           return ["<p style='position: absolute; top: 40%;left: 20%'><img src='RL/stimuli/s1.jpeg' width='200px'/></p> <p style='position: absolute; top: 40%;right: 20%'><img src='RL/stimuli/s2s.jpeg' width='200px'/></p> <p style='position: absolute; top: 40%;right: 45%'><img src='RL/stimuli/punishment.jpeg' width='200px'/></p>"]
        }else if (last_select==1 && last_left_right_s1 == 2 && last_reward_s2==1){
           return ["<p style='position: absolute; top: 40%;right: 20%'><img src='RL/stimuli/s1.jpeg' width='200px'/></p> <p style='position: absolute; top: 40%;left: 20%'><img src='RL/stimuli/s2s.jpeg' width='200px'/></p> <p style='position: absolute; top: 40%;right: 45%'><img src='RL/stimuli/reward.jpeg' width='200px'/></p>"]
        } else if (last_select==1 && last_left_right_s1 == 2 && last_reward_s2==0){
           return ["<p style='position: absolute; top: 40%;right: 20%'><img src='RL/stimuli/s1.jpeg' width='200px'/></p> <p style='position: absolute; top: 40%;left: 20%'><img src='RL/stimuli/s2s.jpeg' width='200px'/></p> <p style='position: absolute; top: 40%;right: 45%'><img src='RL/stimuli/punishment.jpeg' width='200px'/></p>"]
        } else {
           return ['<p style="font-size: 48px">時間内に選択を行ってください</p>']
        }
      },
      button_html: '%choice%',
      trial_duration: 1000,
      response_ends_trial: false
  },{
    　type: jsPsychHtmlButtonResponse,
    　stimulus: '',
      choices: ['<p style="font-size: 48px">+</p>'],
      button_html: '%choice%',
      trial_duration: function() {
        return Math.floor(Math.random() * 1000) + 500;
      },
      response_ends_trial: false,
  }],
  timeline_variables: stimuli
};

/*タイムラインの設定*/
const timeline = [instruction, choice];

