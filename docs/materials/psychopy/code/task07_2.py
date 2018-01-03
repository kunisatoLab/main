# -*- coding: utf-8 -*-
from psychopy import visual, core, event, gui, data, misc
import numpy, os, random, time, csv

try:
    #　画面の準備（灰色の画面、マウスはallowGUI=Falseで表示されないようにしている）
    myWin = visual.Window (fullscr=True, monitor= 'Default', allowGUI=False, units='norm', color= (0,0,0))
    # 数字1~9のリストの準備
    numList = [1,2,3,4,5,6,7,8,9]
    
    # 内側のforループを2回繰り返すためのfor文
    for m in range(2):
        # numListをシャッフルする(外側のループが１回まわるごとにシャッフルする)。
        numpy.random.shuffle(numList)
        # 内側のfor文（range(9)で0~8のリストを作成し、前から順番でiにいれる）
        for i in range(9):
            #　numListのi番目（numList[i]）を提示するが、numListは数字なので、str()で文字に変換している。
            myText = visual.TextStim(myWin,text = str(numList[i]),color = (1,0.6,-0.6),height=1)
            # 準備した刺激を描いて、画面を出して、１秒待つ
            myText.draw()
            myWin.flip()
            core.wait(0.5)
except TypeError, e:
    print e
