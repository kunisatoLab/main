# -*- coding: utf-8 -*-
from psychopy import visual, core, event, gui, data, misc
import numpy, os, random, time, csv

try:
    #　画面の準備（灰色の画面、マウスはallowGUI=Falseで表示されないようにしている）
    myWin = visual.Window (fullscr=True, monitor= 'Default', allowGUI=False, units='norm', color= (0,0,0))
    # 数字1~5のリストの準備
    numList = [1,2,3,4,5]
    # 内側のforループを５回繰り返すためのfor文
    for m in range(5):
        # 内側のfor文（range(5)で0~4のリストを作成し、前から順番でiにいれる）
        for i in range(5):
            #　numListのi番目（numList[i]）を提示するが、numListは数字なので、str()で文字に変換している。
            myText = visual.TextStim(myWin,text = str(numList[i]),color = (-1,-1,-1))
            # 準備した刺激を描いて、画面を出して、１秒待つ
            myText.draw()
            myWin.flip()
            core.wait(1)
except TypeError, e:
    print e
