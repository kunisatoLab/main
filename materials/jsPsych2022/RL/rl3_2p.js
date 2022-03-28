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

const choice = {
    stimulus: '',
    type: jsPsychHtmlButtonResponse,
    choices: ['<div style="position: absolute; top: 65%; left: 20%"><img src="RL/stimuli/s1s.jpeg" width="200px"/></div>',
    '<div style="position: absolute; top: 30%; right: 20%"><img src="RL/stimuli/reward.jpeg" width="200px"/></div>'],
    button_html: '%choice%',
    trial_duration: 2000
};

/*タイムラインの設定*/
const timeline = [instruction, choice];
