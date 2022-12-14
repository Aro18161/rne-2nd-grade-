        if result_inst==0:
            if samples_wrote+(buffer+2)<=samples_total:#7초
                block = audio[samples_wrote : (samples_wrote + buffer+3)]
                result_inst5=s.check_same(block,std)
                if result_inst5==0:
                    if samples_wrote+(buffer+4)<=samples_total:
                        block = audio[samples_wrote : (samples_wrote + buffer+5)]
                        result_inst7=s.check_same(block,std)
                        for i in range(counter,counter+5):
                            result[i]=result_inst7
                    else:
                        for i in range(counter,counter+3):
                            result[i]=0
                else:
                    for i in range(counter,counter+3):
                        result[i]=1
            else:
                for i in range(counter,counter+1):
                    result[i]=0
        else:
            for i in range(counter,counter+1):
                result[i]=1
        samples_wrote+=1*sr





result_inst5=0
result_inst7=0
result_inst=0
samples_wrote=0
buffer=0
samples_total=0
counter=0
audio=0
result=0
s=0
std=0
sr=0
winsz=1

        if result_inst==0:
            if samples_wrote+(buffer+2)<=samples_total:#7초
                block = audio[samples_wrote : (samples_wrote + buffer+3)]
                result_inst7=s.check_same(block,std)
                if result_inst7==1:
                    for i in range(counter,counter+winsz+3):
                        result[i]=result_inst7
                else:
                    for i in range(counter,counter+winsz+3):
                        result[i]=0
            else:
                for i in range(counter,counter+winsz):
                    result[i]=0
        else:
            for i in range(counter,counter+winsz+1):
                result[i]=1
        samples_wrote+=1*sr


                if result_inst5==0:
                    if samples_wrote+(buffer+4)<=samples_total:
                        block = audio[samples_wrote : (samples_wrote + buffer+5)]
                        result_inst7=s.check_same(block,std)
                        for i in range(counter,counter+5):
                            result[i]=result_inst7
                    else:
                        for i in range(counter,counter+3):
                            result[i]=0
                else:
                    for i in range(counter,counter+3):
                        result[i]=1
            else:
                for i in range(counter,counter+1):
                    result[i]=0
        else:
            for i in range(counter,counter+1):
                result[i]=1
        samples_wrote+=1*sr