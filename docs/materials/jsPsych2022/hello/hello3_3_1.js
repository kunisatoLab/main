/* 課題に関するコードを以下に書く */
const text1 = ["こんにちは","ニイハオ","アニョハセヨ","ハロー"];
const text2 = ["こんばんは","ワンシャンハオ","アンニョンヒジュムセヨ","グッドイーブニング"];

/* タイムラインの設定 */
const timeline = []
for( var i = 0; i<4; i++){
  if (i==0 || i==2) {
    var text = text1[i];
  }else{
    var text = text2[i];
  }
  const welcome = {
    type: jsPsychHtmlKeyboardResponse,
    stimulus: text,
    trial_duration: 1000,
  };
  timeline.push(welcome);
}