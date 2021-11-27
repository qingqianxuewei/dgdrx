# -*- coding:utf-8 -*- 
# @Time: 2021/5/22 21:44
# @Author: zxw
# @Name: linedemo
# @Software: PyCharm


import xlrd
import json

data_list = []


file_name = input("请输入处理文件名")
ExcelFile=xlrd.open_workbook(file_name)

sheet=ExcelFile.sheet_by_index(0)

for i in range(2,17):
    row_index = sheet.row(i)

    id = row_index[3].value
    if len(id) > 0:

        name = row_index[2].value
        org = row_index[1].value
        rank = int(row_index[5].value)
        score = int(row_index[4].value)

        scores = []
        scores.append(int(row_index[12].value))
        scores.append(int(row_index[18].value))
        scores.append(int(row_index[29].value))
        scores.append(int(row_index[34].value))
        scores.append(int(row_index[38].value))

        ranks = []
        ranks.append(int(row_index[13].value))
        ranks.append(int(row_index[19].value))
        ranks.append(int(row_index[30].value))
        ranks.append(int(row_index[35].value))
        ranks.append(int(row_index[39].value))

        one = {"id":id,"name":name,"org":org,"rank":rank,"score":score,"scores":scores,"ranks":ranks}
        # js = json.dumps(one, ensure_ascii=False)
        data_list.append(one)

print(json.dumps(data_list, ensure_ascii=False))

f1 = open('../data/rank.json','w',encoding='utf8')
f1.write("dataFunctionCallbackRank({})".format(json.dumps(data_list, ensure_ascii=False)))


avg_list = []
max_list = []
min_list = []
total_json = {}

for i in range(19,25):
    row_index = sheet.row(i)
    max_list.append(int(row_index[2].value))

for i in range(25,31):
    row_index = sheet.row(i)
    min_list.append(int(row_index[2].value))

for i in range(31, 37):
    row_index = sheet.row(i)
    avg_list.append(int(row_index[2].value))

total_json = {"max_list": max_list, "min_list":min_list, "avg_list":avg_list}
print(json.dumps(total_json, ensure_ascii=False))

f2 = open('../data/total.json','w',encoding='utf8')
f2.write("dataTotalFunctionCallbackRank({})".format(json.dumps(total_json, ensure_ascii=False)))