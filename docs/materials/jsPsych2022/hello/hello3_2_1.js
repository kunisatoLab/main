/* 課題に関するコードを以下に書く */
const text = ["こんにちは","ニイハオ","アニョハセヨ","ハロー"];

const welcome1 = {
  type: jsPsychHtmlKeyboardResponse,
  stimulus: text[0],
  trial_duration: 1000,
};

const welcome2 = {
  type: jsPsychHtmlKeyboardResponse,
  stimulus: text[1],
  trial_duration: 1000,
};

const welcome3 = {
  type: jsPsychHtmlKeyboardResponse,
  stimulus: text[2],
  trial_duration: 1000,
};

const welcome4 = {
  type: jsPsychHtmlKeyboardResponse,
  stimulus: text[3],
  trial_duration: 1000,
};

/*タイムラインの設定*/
const timeline = [welcome1,welcome2,welcome3,welcome4];