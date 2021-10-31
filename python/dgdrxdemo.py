# -*- coding:utf-8 -*- 
# @Time: 2021/5/22 21:44
# @Author: zxw
# @Name: linedemo
# @Software: PyCharm


import xlrd
import json

data_list = []


ExcelFile=xlrd.open_workbook(r'D:\code\python\datagraph\dataxls.xls')

sheet=ExcelFile.sheet_by_index(0)

for i in range(3,27):
    row_index = sheet.row(i)

    id = row_index[3].value
    if len(id) > 0:

        name = row_index[2].value
        org = row_index[1].value
        rank = int(row_index[5].value)
        score = int(row_index[4].value)

        one = {"id":id,"name":name,"org":org,"rank":rank,"score":score}
        data_list.append(one)



print(data_list)