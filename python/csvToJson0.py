# public/bank.csvを読み込んで、public/bank.jsonを作成する
# 一行目にヘッダーがある
# ヘッダーの内容
# date,status,reminder,inM,outM,resM,inI,outI,resI,inC,outC,resC,inH,outH,resC,res,

import csv
import json

# CSVファイルを読み込む

f = open('public/data-bank/bank.csv', 'r', encoding='utf-8-sig')

reader = csv.reader(f)
# CSVファイルを閉じる

# 最初の行はヘッダー　でそれぞれが相当する列のjsonのキーになる、の要領でjsonへの変換を行う
header = next(reader)
json_data = []
data = []
# print("@@@@@@@@@@@@@@@@@@@")
print(header)



for row in reader:
    data.append(row)


# [0'\ufeffdate', 1'status', 2'reminder', 
#  3'inM', 'outM', 'resM', 
#  6'inI', 'outI', 'resI', 
#  9'inC', 'outC', 'resC', 
#  12'inH', 'outH', 'resC', 
#  15'res', '']


r = data[0]
resM = int(r[5].replace(",","")) if r[5] != "" else 0
resI = int(r[8].replace(",","")) if r[8] != "" else 0
resC = int(r[11].replace(",","")) if r[11] != "" else 0
resH = int(r[14].replace(",","")) if r[14] != "" else 0
res = int(r[15].replace(",","")) if r[15] != "" else 0

for row in data[1:]:
    mm = row[0].split("/")[0]
    dd = row[0].split("/")[1].replace('"', '').zfill(2)
    print("dd before assignment:", dd)
    row[0] = "2023-" + mm + "-" + dd
    print("dd after assignment:", dd)
    
    resM = resM + (int(row[3].replace(",","")) if row[3] != "" else 0) - (int(row[4].replace(",","")) if row[4] != "" else 0)
    resI = resI + (int(row[6].replace(",","")) if row[6] != "" else 0) - (int(row[7].replace(",","")) if row[7] != "" else 0)
    resC = resC + (int(row[9].replace(",","")) if row[9] != "" else 0) - (int(row[10].replace(",","")) if row[10] != "" else 0)
    resH = resH + (int(row[12].replace(",","")) if row[12] != "" else 0) - (int(row[13].replace(",","")) if row[13] != "" else 0)
    
    res = resM + resI + resC + resH
    row[5] = "{:,}".format(resM)
    row[8] = "{:,}".format(resI)
    row[11] = "{:,}".format(resC)
    row[14] = "{:,}".format(resH)
    row[15] = "{:,}".format(res)
           
    json_data.append(dict(zip(header, row)))

f.close()

# JSONファイルに書き込む
f = open('public/bank.json', 'w')
json.dump(json_data, f, indent=4)
# JSONファイルを閉じる
f.close()




# 以下、json_dataの中身を確認するためのコード

print(len(json_data))
# for d in json_data:
#     print(d)
#     print("")
