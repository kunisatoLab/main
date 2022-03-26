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
  {stimulus: "<p style='color:red;font-size:60pt;'>赤</p>",
  data: { no:'1', stim_type: 'congruent', correct_key: 'd'}},
  {stimulus: "<p style='color:green;font-size:60pt;'>赤</p>",
  data: { no:'2', stim_type: 'incongruent', correct_key: 'j'}},
  {stimulus: "<p style='color:yellow;font-size:60pt;'>赤</p>",
  data: { no:'3', stim_type: 'incongruent', correct_key: 'k'}},
  {stimulus: "<p style='color:blue;font-size:60pt;'>赤</p>",
  data: { no:'4', stim_type: 'incongruent', correct_key: 'f'}},
  {stimulus: "<p style='color:red;font-size:60pt;'>緑</p>",
  data: { no:'5', stim_type: 'congruent', correct_key: 'd'}},
  {stimulus: "<p style='color:green;font-size:60pt;'>緑</p>",
  data: { no:'6', stim_type: 'incongruent', correct_key: 'j'}},
  {stimulus: "<p style='color:yellow;font-size:60pt;'>緑</p>",
  data: { no:'7', stim_type: 'incongruent', correct_key: 'k'}},
  {stimulus: "<p style='color:blue;font-size:60pt;'>緑</p>",
  data: { no:'8', stim_type: 'incongruent', correct_key: 'f'}},
  {stimulus: "<p style='color:red;font-size:60pt;'>黄</p>",
  data: { no:'9', stim_type: 'congruent', correct_key: 'd'}},
  {stimulus: "<p style='color:green;font-size:60pt;'>黄</p>",
  data: { no:'10', stim_type: 'incongruent', correct_key: 'j'}},
  {stimulus: "<p style='color:yellow;font-size:60pt;'>黄</p>",
  data: { no:'11', stim_type: 'incongruent', correct_key: 'k'}},
  {stimulus: "<p style='color:blue;font-size:60pt;'>黄</p>",
  data: { no:'12', stim_type: 'incongruent', correct_key: 'f'}},
  {stimulus: "<p style='color:red;font-size:60pt;'>青</p>",
  data: { no:'13', stim_type: 'congruent', correct_key: 'd'}},
  {stimulus: "<p style='color:green;font-size:60pt;'>青</p>",
  data: { no:'14', stim_type: 'incongruent', correct_key: 'j'}},
  {stimulus: "<p style='color:yellow;font-size:60pt;'>青</p>",
  data: { no:'15', stim_type: 'incongruent', correct_key: 'k'}},
  {stimulus: "<p style='color:blue;font-size:60pt;'>青</p>",
  data: { no:'16', stim_type: 'incongruent', correct_key: 'f'}}
];

/* stroop刺激の呈示 */
const stroop = {
  timeline:[{
    type: jsPsychHtmlKeyboardResponse,
    choices: ["d","f","j","k"],
    stimulus: jsPsych.timelineVariable('stimulus'),
    trial_duration: 2000,
    response_ends_trial: true,
    prompt: '赤色ならd, 青色ならf, 緑色ならj, 黄色ならk',
    data: jsPsych.timelineVariable('data'),
    on_finish: function(data){
      var correct = 0;
      if(data.correct_key == data.response){
        correct = 1;
      } 
      data.correct = correct;
    },
    post_trial_gap: function() {
        return Math.floor(Math.random() * 1500) + 500;
    }
  }],
  timeline_variables: stimuli,
  sample: {type: 'fixed-repetitions',size: 3}
}

/*タイムラインの設定*/
const timeline = [instruction, stroop];
