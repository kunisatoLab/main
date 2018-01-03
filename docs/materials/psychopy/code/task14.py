# -*- coding: utf-8 -*-
from psychopy import visual, core, event, gui, data, misc
import numpy, os, random, time, csv

try:
    # 参加者IDの取得
    try:
        expInfo = misc.fromFile('lastParams.pickle')
    except:
        expInfo = {'Participant':'001'}

    expInfo['dateStr']= data.getDateStr()
    dlg = gui.DlgFromDict(expInfo, title='Experiment', fixed=['dateStr'])
    if dlg.OK:
        misc.toFile('lastParams.pickle', expInfo)
    else:
        core.quit()

    #　画面の準備（灰色の画面、マウスはallowGUI=Falseで表示されないようにしている）
    myWin = visual.Window (fullscr=True, monitor= 'Default', allowGUI=False, units='norm', color= (0,0,0))
    # 評価尺度の準備（今回は１から５の５件法）
    myRatingScale = visual.RatingScale(myWin,scale=u'1=全くそう思わない\n2=そう思わない\n3=どちらでもない\n4=そう思う\n5=とてもそう思う',low=1,high=5, size=1.3, textSize=0.65, pos =  (0.0, -0.3),tickMarks=[1,2,3,4,5],tickHeight=-1)
    # 質問項目のリストを準備
    questionList = [u"PsychoPyを勉強して良かったですか？",u"PsychoPyは面白かったですか？",u"PsychoPy難しかったですか？",u"for文は理解できましたか？",u"if文は理解できましたか？"]
    # 結果を保存する場所を準備
    results=[]

    # 質問項目リストの１〜５を呈示する
    for questionNum in range(5):
        # 反応があるまで以下の項目の書き込みと画面呈示をする。
        myRatingScale.reset()
        while myRatingScale.noResponse:
            myItem = visual.TextStim(myWin, text=questionList[questionNum], height=.1, units='norm',pos=(0,0.1))
            myItem.draw()
            myRatingScale.draw()
            myWin.flip()
        results.append([questionNum+1]+[myRatingScale.getRating()]+[myRatingScale.getRT()])

    # 結果の保存
    curD = os.getcwd()
    datafile=open(os.path.join(curD,'log/Sub'+expInfo['Participant']+'_'+expInfo[ 'dateStr']+'.csv'),'wb')
    datafile.write('Question,Response,RT\n')
    for r in results:
        datafile.write('%d,%d,%f\n' % tuple(r))
    datafile.close()
except TypeError, e:
    print e
