/* 課題に関するコードを以下に書く */
const text = ["こんにちは","ニイハオ","アニョハセヨ","ハロー"];

/* タイムラインの設定 */
const timeline = []
for (var i = 0; i<4; i++) {
  const welcome = {
    type: jsPsychHtmlKeyboardResponse,
    stimulus: text[i],
    trial_duration: 1000,
  };
  timeline.push(welcome);
}