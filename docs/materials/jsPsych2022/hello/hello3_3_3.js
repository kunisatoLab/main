/* 課題に関するコードを以下に書く */
const text1 = ["こんにちは","ニイハオ","アニョハセヨ","ハロー","フーテ　ミッタ－フ","ブエナス　タルデス"]
const text2 = ["こんばんは","ワンシャンハオ","アンニョンヒジュムセヨ","グッドイーブニング","フーテ　ナーフオント","ブエナス　ノーチェス"]
const text3 = ["おはよう","ザオシャンハオ","アニョハセヨ","グッドモーニング","フーテ　モールヘン","ブエノス　ディアス"]


/* タイムラインの設定 */
const timeline = []
for( var i = 0; i<6; i++){
  for( var j = 0; j<3; j++){
    if (j==0) {
      var text = text3[i];
    }else if(j==1){
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
}