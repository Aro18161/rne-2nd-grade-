import os                                                       # 파일 경로 접근시 필요한 python 내장 라이브러리
import librosa
                                       
import numpy as np
from flask import Flask                                            # python web framework 
from flask import request                                        # 웹 요청 관련 모듈
from flask import render_template, redirect, url_for, request    # flask에서 필요한 모듈
import numpy as np
import soundfile
# from ECAPAModel import ECAPAModel
global result
global timestamp


app=Flask(__name__)

@app.route('/',methods=['GET'])
def main_redner():
    return render_template('index.html')

@app.route('/uploader',methods = ['GET', 'POST'])
def upload_file():
    global file_type
    global result

    if request.method == 'POST':
        f = request.files['file']
        f1=request.files['file1']
        #order_nummm=""
        #with open("order_num.txt","r") as order_num:
        #    order_nummm=str(order_num.readline())
        f.save('static/data/'+'std'+f.filename[-4:])
        f1.save('static/data/'+'test'+f1.filename[-4:])

        file_type=f.filename[-4:]
        file_type_test=f1.filename[-4:]
        #with open("order_num.txt","w") as order_num2:
        #    order_nummm=int(order_nummm)
        #    order_num2.write(str(order_nummm+1))

    # std,_=soudfile.read('static/data/std'+file_type_test)
    wav='static/data/'+'test'+file_type_test
    audio, sr = soundfile.read(wav)
    

    # Get number of samples for 2 seconds; replace 2 by any number
    buffer = 3 * sr

    samples_total = len(audio)
    samples_wrote = 0
    counter = 1

    # s=ECAPAModel(...)
    # s.load_parameter('exps/pretrain.model')
    while samples_wrote < samples_total:

        #check if the buffer is not exceeding total samples 
        if buffer > (samples_total - samples_wrote):
            buffer = samples_total - samples_wrote

        block = audio[samples_wrote : (samples_wrote + buffer)]
        #out_filename = "split_" + str(counter) + "_" + str(order_nummm)

        # Write 2 second segment
        #librosa.write('static\data'+out_filename+".wav", block, sr)
        counter += 1
        samples_wrote += 1*sr
    
    #block쓰면 됨
        result_inst=s.check_same(block,std)

        if result_inst==0:
            if samples_wrote+(buffer+2)<=samples_total:#5초
                block = audio[samples_wrote : (samples_wrote + buffer+3)]
                result_inst5=s.check_same(block,std)
                if result_inst5==0:
                    if samples_wrote+(buffer+4)<=samples_total:
                        block = audio[samples_wrote : (samples_wrote + buffer+5)]
                        result_inst7=s.check_same(block,std)
                        for i in range(samples_wrote,samples_wrote+buffer+5):
                            result[i]=result_inst7
                    else:
                        for i in range(samples_wrote,samples_wrote+buffer+3):
                            result[i]=0
                else:
                    for i in range(samples_wrote,samples_wrote+buffer+3):
                        result[i]=1
            else:
                for i in range(samples_wrote,samples_wrote+buffer+1):
                    result[i]=0
        else:
            for i in range(samples_wrote,samples_wrote+buffer+1):
                    result[i]=1
    global timestamp

    timestamp=[]

    history=-1
    for i in result:
        if history!=i:
            timestamp.append(i)
        history=i

    return redirect("http://localhost:5000/result")


@app.route('/result',methods = ['GET', 'POST'])
def result():
    global result
    global timestamp
    
    result=[1,0,0,1,1,0,1,0,1,1,1,1,0,0,1,0,0,0,0,1,0,1,0,1,1,0,1,1,0,1,1,0] #임시용
    timestamp=[0,5,7,12,15,21,28,40,41,43]
    lenght=len(result)
    one_gap=float(100/lenght)

    return render_template('index.html',result=result,one_gap=str(one_gap*1.1)+str('%'),geocode=timestamp)

if __name__ == "__main__":
    print(("2022 R&E site started"))
    app.run(host="0.0.0.0", debug=True)

