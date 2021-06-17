# 加载模型部分代码

import kashgari
import os


def getEventtext(path):
    with open(path, "r", encoding="utf-8") as file:
        while 1:
            title = input("请输入标题:")
            loaded_model = kashgari.utils.load_model(
                'REVISED_location_WordEmbedding.h5')
            t = loaded_model.predict([[char for char in title]])
            print(t)
            target = ""
            source = ""
            eventtext = ""
            for i in range(len(t[0])):
                if t[0][i] == "B-source":
                    source += " " + title[i]
                if t[0][i] == "I-source":
                    source += title[i]
                if t[0][i] == "B-target":
                    target += " " + title[i]
                if t[0][i] == "I-target":
                    target += title[i]
                if t[0][i] == "B-eventtext":
                    eventtext += " " + title[i]
                if t[0][i] == "I-eventtext":
                    eventtext += title[i]

            print("source:", source)
            print("target:", target)
            print("eventtext:", eventtext)

        file.close()


# getEventtext("test.txt")

class GerAngels:
    yinxiao = ""
    shougan = ""
    chongdian = ""
    waiguan = ""
    paizhao = ""
    pingmu = ""

    def __init__(self):
        self.model = kashgari.utils.load_model(
            'REVISED_location_WordEmbedding.h5')

    def predict(title):
        t = self.model.predict([[char for char in title]])
        res = [char for char in title]
        resIndex = []
        for i in range(len(t[0])):
            resIndex.append(t[0][i])
        return res, resIndex