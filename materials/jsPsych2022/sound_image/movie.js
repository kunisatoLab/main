/* 課題に関するコードを以下に書く */
const instruction = {
  type: jsPsychHtmlKeyboardResponse,
  stimulus: "<p style='text-align:left'>これから動画が流れます。</p>"+
    "<p style='text-align'>流れている動画どのくらい好きか嫌いかマウスを使ってスライダーを動かして評価してください。</p>"+
    "<p style='text-align:left'>スペースを押して始めてください。</p>",
  post_trial_gap: 1000
};

const movie1 = {
    type: jsPsychVideoSliderResponse,
    stimulus: ['movie/stimuli/v1.mp4'],
    width: 600,
    labels: ["嫌い", "どちらでもない", "好き"],
    prompt: "<p>この動画がどのくらい好きか嫌いか，マウスでスライダーを動かして，評定してください</p>",
    button_label: "次へ"
}

/*タイムラインの設定*/
var timeline = [instruction, movie1];
