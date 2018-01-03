# -*- coding: utf-8 -*-
from psychopy import visual, core, event, gui, data, misc
import numpy, os, random, time, csv

try:
    #　画面の準備（灰色の画面、マウスはallowGUI=Falseで表示されないようにしている）
    myWin = visual.Window (fullscr=True, monitor= 'Default', allowGUI=False, units='norm', color= (0,0,0))
    # 「壱」~「五」のリストの準備
    charList = [u'壱',u'弐',u'三',u'四',u'五']
    # 内側のforループを５回繰り返すためのfor文
    for m in range(5):
        # 内側のfor文（range(5)で0~4のリストを作成し、前から順番でiにいれる）
        for i in range(5):
            #　charListのi番目（charList[i]）を提示するが、charListは文字なので、str()で変換しなくてもよい。
            myText = visual.TextStim(myWin,text = charList[i],color = (-1,-1,-1))
            # 準備した刺激を描いて、画面を出して、１秒待つ
            myText.draw()
            myWin.flip()
            core.wait(1)
except TypeError, e:
    print e
