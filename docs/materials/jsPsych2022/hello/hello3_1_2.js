/* 課題に関するコードを以下に書く */
const text = ["こんにちは","ニイハオ","アニョハセヨ","ハロー"];

const welcome = {
  type: jsPsychHtmlKeyboardResponse,
  stimulus: text[2]
};

/*タイムラインの設定*/
const timeline = [welcome];