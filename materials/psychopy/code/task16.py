# -*- coding: utf-8 -*-
from psychopy import visual, sound, core, event, gui, data, misc
import numpy, os, random, time, csv

#　画面の準備（灰色の画面、マウスはallowGUI=Falseで表示されないようにしている）
myWin = visual.Window (fullscr=True, monitor= 'Default', allowGUI=False, units='norm', color= (0,0,0))

#現在このコードのある場所のパスを取得して、そのパスの１つ下のstimフォルダに移動する（音声ファイルを読み込むため）
curD = os.getcwd()
os.chdir(os.path.join(curD,'stimli'))

try:
    # トーン音の教示をだす。
    instText = visual.TextStim(myWin,text = u'ピーって音',pos=(0,0),color = (-1,-1,-1),height=0.1)
    instText.draw()
    myWin.flip()
    # トーン音の作成準備とプレイ
    tone = sound.Sound(value='C', sampleRate=44100, secs=1.0, bits=8, octave=5)
    tone.setVolume(0.5)
    tone.play()
    core.wait(2)

    # 盛大な拍手音の教示をだす。
    instText = visual.TextStim(myWin,text = u'盛大な拍手',pos=(0,0),color = (-1,-1,-1),height=0.1)
    instText.draw()
    myWin.flip()
    # 用意した拍手音の準備とプレイ
    applauseLarge = sound.Sound('applauseLarge.wav')
    applauseLarge.setVolume(0.5)
    applauseLarge.play()
    core.wait(10)

    # まばらな拍手音の教示をだす。
    instText = visual.TextStim(myWin,text = u'まばらな拍手',pos=(0,0),color = (-1,-1,-1),height=0.1)
    instText.draw()
    myWin.flip()
    # 用意した拍手音の準備とプレイ
    applauseSmall = sound.Sound('applauseSmall.wav')
    applauseSmall.play()
    core.wait(10)

except TypeError, e:
    print e
