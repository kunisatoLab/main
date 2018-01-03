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
    instructionStr = u"今から、色のついた文字がでてきます。\n文字の意味ではなく、文字の色に基づいてボタン押しをしてください。\n文字が赤色なら、キーボードの１を押してください。\n文字が黄色なら、キーボードの２を押してください。 \n文字が青色なら、キーボードの３を押してください。"
    instText = visual.TextStim(myWin, text=instructionStr, pos=(0,0), color=(-1,-1,-1), height=0.1)
    instText.draw()
    myWin.flip()
    core.wait(5)

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
            core.wait(1)
            #　中視点(+)を1秒提示する。
            myText = visual.TextStim(myWin,text = '+',pos=(0,0),color = (-1,-1,-1),height=0.2)
            myText.draw()
            myWin.flip()
            core.wait(1)
except TypeError, e:
    print e
