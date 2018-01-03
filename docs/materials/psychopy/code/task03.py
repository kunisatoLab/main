# -*- coding: utf-8 -*-
from psychopy import visual, core, event, gui, data, misc
import numpy, os, random, time, csv

try:
    #　画面の準備（灰色の画面、マウスはallowGUI=Falseで表示されないようにしている）
    myWin = visual.Window (fullscr=True, monitor= 'Default', allowGUI=False, units='norm', color= (0,0,0))
    #　「あ」の提示
    myText = visual.TextStim(myWin,text = u'あ',color = (-1,-1,-1))
    myText.draw()
    myWin.flip()
    core.wait(1)

    #　「い」の提示
    myText = visual.TextStim(myWin,text = u'い',color = (-1,-1,-1))
    myText.draw()
    myWin.flip()
    core.wait(1)

    #　「う」の提示
    myText = visual.TextStim(myWin,text = u'う',color = (-1,-1,-1))
    myText.draw()
    myWin.flip()
    core.wait(1)

    #　「え」の提示
    myText = visual.TextStim(myWin,text = u'え',color = (-1,-1,-1))
    myText.draw()
    myWin.flip()
    core.wait(1)

    #　「お」の提示
    myText = visual.TextStim(myWin,text = u'お',color = (-1,-1,-1))
    myText.draw()
    myWin.flip()
    core.wait(1)
except TypeError, e:
    print e
