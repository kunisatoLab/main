/* 課題に関するコードを以下に書く */
const instruction = {
  type: jsPsychHtmlKeyboardResponse,
  stimulus: "<p style='text-align:left'>これから百人一首の音声が流れます。</p>"+
    "<p style='text-align'>流れているものを１から４のキーを押して選んでください。</p>"+
    "<p style='text-align:left'>スペースを押して始めてください。</p>",
  post_trial_gap: 1000
};

const hundred_poems1  = {
    type: jsPsychAudioKeyboardResponse,
    stimulus: 'sound/stimuli/a1.m4a',
    choices: ['1', '2','3','4'],
    prompt: "<p style='text-align:left'>これから流れる百人一首は以下のどれでしょうか？１から４のキーで選んでください</p>"+
    "<p style='text-align:left'>1 あしびきの山鳥の尾のしだり尾の　ながながし夜をひとりかも寝む</p>"+
    "<p style='text-align:left'>2 春過ぎて夏来にけらし白妙の　衣干すてふ天の香具山</p>"+
    "<p style='text-align:left'>3 秋の田のかりほの庵の苫をあらみ　わが衣手は露にぬれつつ</p>"+
    "<p style='text-align:left'>4 田子の浦にうち出でてみれば白妙の　富士の高嶺に雪は降りつつ</p>"
};

/*タイムラインの設定*/
const timeline = [instruction, hundred_poems1];
