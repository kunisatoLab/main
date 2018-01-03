# -*- coding: utf-8 -*-
from psychopy import visual, core, event, gui, data, misc
import numpy, os, random, time, csv

#刺激セットの繰り返し数
M = 2

try:
    #　画面の準備（灰色の画面、マウスはallowGUI=Falseで表示されないようにしている）
    myWin = visual.Window (fullscr=True, monitor= 'Default', allowGUI=False, units='norm', color= (0,0,0))

    # 色の辞書の作成
    colorDic = {
            u'赤': {'rgb': ( 1, -1,-1), 'type': '1'},
            u'黄': {'rgb': ( 1,  1,-1), 'type': '2'},
            u'青': {'rgb': (-1, -1, 1), 'type': '3'}
            }
    #　文字と文字の色の辞書の作成
    charConditionList = [
            {'kanjiChar': u'赤', 'color': u'赤'},
            {'kanjiChar': u'黄', 'color': u'赤'},
            {'kanjiChar': u'青', 'color': u'赤'},
            {'kanjiChar': u'赤', 'color': u'黄'},
            {'kanjiChar': u'黄', 'color': u'黄'},
            {'kanjiChar': u'青', 'color': u'黄'},
            {'kanjiChar': u'赤', 'color': u'青'},
            {'kanjiChar': u'黄', 'color': u'青'},
            {'kanjiChar': u'青', 'color': u'青'}
            ]
    # 辞書の長さ（刺激セット数）
    N = len(charConditionList)

    # 教示をだす。
    instructionStr = u"今から、色のついた文字がでてきます。\n文字の意味ではなく、文字の色に基づいてボタン押しをしてください。\n文字が赤色なら、キーボードの１を押してください。\n文字が黄色なら、キーボードの２を押してください。\n文字が青色なら、キーボードの３を押してください。\nこの教示が読めたら、「スペース」キーを押して課題を始めてください"
    instText = visual.TextStim(myWin, text=instructionStr, pos=(0,0), color=(-1,-1,-1), height=0.1)
    instText.draw()
    myWin.flip()
    #　参加者がspaceキーを押すまで画面を出したまま待つ。
    keyList = event.waitKeys(keyList=['space'])

    #反応時間の計測のための設定
    stopwatch = core.Clock()

    # 参加者の反応をリセット
    Responded = None

    # 内側のforループをM回繰り返すためのfor文
    for m in range(M):
        r = range(N)
        numpy.random.shuffle(r)
        for i, currentState in enumerate(r):
            charCondition = charConditionList[currentState]
            colorData = colorDic[charCondition['color']]
            kanjiCharData = colorDic[charCondition['kanjiChar']]
            #　kanjiListのi番目（kanjiList[i]）を、colorListのi番目の色(colorList[i])で提示する。
            myText = visual.TextStim(myWin,text = charCondition['kanjiChar'],pos=(0,0),color = colorData['rgb'],height=0.2)
            myText.draw()
            myWin.flip()
            # 参加者の反応測定開始
            # 前回の刺激提示の影響を消去する
            event.clearEvents()
            #ストッウォッチをリセット
            stopwatch.reset()
            # 参加者の反応をリセット
            Responded = False
            #ストップウォッチをリセットしてからstopwatch.getTime()で測定した時間が1秒を超えるまで以下の処理を実行
            while stopwatch.getTime() < 1:
                # もしこれまでに反応がないようなら、event.waitKeysで反応を抜き出す。
                # Responded内には反応と反応時間が入る
                if not Responded:
                    Responded = event.getKeys(keyList=['1','2','3'],timeStamped=stopwatch)
            # もし1秒たっても反応がないなら、no responseと反応時間なしで処理する
            if not Responded:
                Responded = [('no respose', 0)]
            #　参加者の反応測定終了

            # 正解、不正解のフィードバック
            if Responded[0][0] == 'no respose':
                # fbTextに、フィードバックする文字をいれる
                fbText = visual.TextStim(myWin,text = u'無反応',pos=(0,-0.3),color = (-1,-1,-1),height=0.2)
                # rtTextに、フィードバックする反応時間(Responded[0][0])をいれる
                rtText = visual.TextStim(myWin,text = str(Responded[0][1])+u'秒',pos=(0,-0.5),color = (-1,-1,-1),height=0.2)
                # 保存用の結果
                correctIncorrect = None
            elif Responded[0][0]== colorData['type']:
                # fbTextに、フィードバックする文字をいれる
                fbText = visual.TextStim(myWin,text = u'正解',pos=(0,-0.3),color = (-1,-1,-1),height=0.2)
                # rtTextに、フィードバックする反応時間(Responded[0][0])をいれる
                rtText = visual.TextStim(myWin,text = str(Responded[0][1])+u'秒',pos=(0,-0.5),color = (-1,-1,-1),height=0.2)
                # 保存用の結果
                correctIncorrect = True
            else:
                # fbTextに、フィードバックする文字をいれる
                fbText = visual.TextStim(myWin,text = u'不正解',pos=(0,-0.3),color = (-1,-1,-1),height=0.2)
                # rtTextに、フィードバックする反応時間(Responded[0][0])をいれる
                rtText = visual.TextStim(myWin,text = str(Responded[0][1])+u'秒',pos=(0,-0.5),color = (-1,-1,-1),height=0.2)
                # 保存用の結果
                correctIncorrect = False
            #上記で設定したフィードバックと反応時間の書き込み
            fbText.draw()
            rtText.draw()
            # 中視点の準備
            myText = visual.TextStim(myWin,text = '+',pos=(0,0),color = (-1,-1,-1),height=0.2)
            myText.draw()
            #　画面表示
            myWin.flip()
            core.wait(2)
except TypeError, e:
    print e
