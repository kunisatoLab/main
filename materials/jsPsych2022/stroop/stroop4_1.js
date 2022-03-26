/* 課題に関するコードを以下に書く */
/* 教示*/
const instruction = {
  type: jsPsychHtmlKeyboardResponse,
  stimulus: "<p style='text-align:left'>この課題では, 以下のような色のついた単語を見ていただきます。</p>"+
    "<p style='color:red;font-size:60pt;'>青</p>"+
    "<p style='text-align:left'>単語の意味は無視して，それぞれの単語の「色」を以下のキーボードのキーを押して回答してください。</p>"+
    "<p style='text-align:left'>左手の人差し指と中指でdとf，右手の人差し指と中指でjとkを押してください。</p>"+
    "<p style='text-align:left'>・<span style='color:red'>赤色</span>の単語ならdを押す</p>"+
    "<p style='text-align:left'>・<span style='color:blue'>青色</span>の単語ならfを押す</p>"+
    "<p style='text-align:left'>・<span style='color:green'>緑色</span>の単語ならjを押す</p>"+
    "<p style='text-align:left'>・<span style='color:yellow'>黄色</span>の単語ならkを押す</p>"+
    "<p style='text-align:left'>上の例の場合だと，赤色で「青」と書いてありますので，dを押します</p>"+
    "<p style='text-align:left'>キーボードのキーをどれか押すと課題が始まります</p>",
  post_trial_gap: 1000
};

/* 刺激 */
const stimuli = [
  {stimulus: "<p style='color:red;   font-size:60pt;'>赤</p>"},
  {stimulus: "<p style='color:green; font-size:60pt;'>赤</p>"},
  {stimulus: "<p style='color:yellow;font-size:60pt;'>赤</p>"},
  {stimulus: "<p style='color:blue;  font-size:60pt;'>赤</p>"},
  {stimulus: "<p style='color:red;   font-size:60pt;'>緑</p>"},
  {stimulus: "<p style='color:green; font-size:60pt;'>緑</p>"},
  {stimulus: "<p style='color:yellow;font-size:60pt;'>緑</p>"},
  {stimulus: "<p style='color:blue;  font-size:60pt;'>緑</p>"},
  {stimulus: "<p style='color:red;   font-size:60pt;'>黄</p>"},
  {stimulus: "<p style='color:green; font-size:60pt;'>黄</p>"},
  {stimulus: "<p style='color:yellow;font-size:60pt;'>黄</p>"},
  {stimulus: "<p style='color:blue;  font-size:60pt;'>黄</p>"},
  {stimulus: "<p style='color:red;   font-size:60pt;'>青</p>"},
  {stimulus: "<p style='color:green; font-size:60pt;'>青</p>"},
  {stimulus: "<p style='color:yellow;font-size:60pt;'>青</p>"},
  {stimulus: "<p style='color:blue;  font-size:60pt;'>青</p>"}
];

/* stroop刺激の呈示 */
const stroop = {
  timeline:[{
    type: jsPsychHtmlKeyboardResponse,
    stimulus: jsPsych.timelineVariable('stimulus'),
    trial_duration: 2000,
    prompt: '赤色ならd, 青色ならf, 緑色ならj, 黄色ならk'
  }],
  timeline_variables: stimuli,
  sample: {type: 'fixed-repetitions',size: 2}
}

/*タイムラインの設定*/
const timeline = [instruction, stroop];
