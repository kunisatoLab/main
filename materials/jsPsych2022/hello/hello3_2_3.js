/* 課題に関するコードを以下に書く */
const text = ["こんにちは","ニイハオ","アニョハセヨ","ハロー","フッテミダーフ","ボア　タルデ","ボンジュール","グ　ダイ"];

/* タイムラインの設定 */
const timeline = []
for (var i = 0; i<8; i++) {
  const welcome = {
    type: jsPsychHtmlKeyboardResponse,
    stimulus: text[i],
    trial_duration: 1000,
  };
  timeline.push(welcome);
}