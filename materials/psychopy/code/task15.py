# -*- coding: utf-8 -*-
from psychopy import visual, core, event, gui, data, misc
import numpy, os, random, time, csv

#画面の設定
myWin = visual.Window(fullscr=True,monitor='SubMonitor',allowGUI=False,screen=1,units='norm',color=(1,1,1))

#現在このコードのある場所のパスを取得して、そのパスの１つ下のstimフォルダに移動する（画像ファイルを読み込むため）
curD = os.getcwd()
os.chdir(os.path.join(curD,'stimli'))

#使用する画像のリスト
StimList = ["card1.jpg","card2.jpg","card3.jpg","card4.jpg"]
try:
    for i in range(4):
        #画像刺激を提示(2秒ずつ)
        cardImage = visual.ImageStim(win=myWin,image=StimList[i],pos=(0,0),units='norm')
        cardImage.draw()
        myWin.flip()
        core.wait(2)
except TypeError, e:
    print e
