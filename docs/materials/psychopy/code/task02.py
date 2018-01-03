# -*- coding: utf-8 -*-
from psychopy import visual, core, event, gui, data, misc
import numpy, os, random, time, csv

try:
    #　画面の準備（灰色の画面、マウスはallowGUI=Falseで表示されないようにしている）
    myWin = visual.Window (fullscr=True, monitor= 'Default', allowGUI=False, units='norm', color= (0,0,0))
    #　数字の１の提示
    myText = visual.TextStim(myWin,text = '1',color = (-1,-1,-1))
    myText.draw()
    myWin.flip()
    core.wait(1)

    #　数字の２の提示
    myText = visual.TextStim(myWin,text = '2',color = (-1,-1,-1))
    myText.draw()
    myWin.flip()
    core.wait(1)

    #　数字の３の提示
    myText = visual.TextStim(myWin,text = '3',color = (-1,-1,-1))
    myText.draw()
    myWin.flip()
    core.wait(1)

    #　数字の４の提示
    myText = visual.TextStim(myWin,text = '4',color = (-1,-1,-1))
    myText.draw()
    myWin.flip()
    core.wait(1)

    #　数字の５の提示
    myText = visual.TextStim(myWin,text = '5',color = (-1,-1,-1))
    myText.draw()
    myWin.flip()
    core.wait(1)
except TypeError, e:
    print e
