# -*- coding:utf-8 -*- 
# @Time: 2021/5/22 21:44
# @Author: zxw
# @Name: linedemo
# @Software: PyCharm


import xlrd
import json

data_list = []


ExcelFile=xlrd.open_workbook(r'D:\code\python\datagraph\dataxls-20211104.xls')

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
        scores.append(int(row_index[27].value))
        scores.append(int(row_index[34].value))
        scores.append(int(row_index[38].value))

        ranks = []
        ranks.append(int(row_index[13].value))
        ranks.append(int(row_index[19].value))
        ranks.append(int(row_index[28].value))
        ranks.append(int(row_index[35].value))
        ranks.append(int(row_index[39].value))

        one = {"id":id,"name":name,"org":org,"rank":rank,"score":score,"scores":scores,"ranks":ranks}
        # js = json.dumps(one, sort_keys=False, indent=4, separators=(',', ':'))
        data_list.append(one)



print(data_list)


