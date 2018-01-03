# -*- coding: utf-8 -*-
from psychopy import visual, core, event, gui, data, misc
import numpy, os, random, time, csv

#　画面の準備（灰色の画面、マウスはallowGUI=Falseで表示されないようにしている）
myWin = visual.Window (fullscr=True, allowGUI=False, color= (0,0,0))
#現在このコードのある場所のパスを取得して、そのパスの１つ下のstimフォルダに移動する（動画ファイルを読み込むため）
curD = os.getcwd()
os.chdir(os.path.join(curD,'stimli'))

try:
    #時計の準備
    stopwatch = core.Clock()
    #動画刺激の準備
    mov1 = visual.MovieStim(myWin, 'sea.mov',size = [640,480])
    mov1.play()
    #時計のリセット
    stopwatch.reset()
    #動画を30秒間呈示する
    while stopwatch.getTime() < 30:
        mov1.draw()
        myWin.flip()
        if event.getKeys(keyList=['escape','q']):
            myWin.close()
            core.quit()
    myWin.close()
    core.quit()
except TypeError, e:
    print e
