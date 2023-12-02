# public/bank.csvを読み込んで、public/bank.jsonを作成する
# 一行目にヘッダーがある
# ヘッダーの内容
# date,class,reminder,inM,outM,resM,inI,outI,resI,inC,outC,resC,inH,outH,resC,res,

import csv
import json

# CSVファイルを読み込む
f = open('public/bank.csv', 'r')
reader = csv.reader(f)

# 最初の行はヘッダー　でそれぞれが相当する列のjsonのキーになる、の要領でjsonへの変換を行う
header = next(reader)
json_data = []
for row in reader:
    json_data.append(dict(zip(header, row)))
    
# JSONファイルに書き込む
f = open('public/bank.json', 'w')
json.dump(json_data, f, indent=4)

# CSVファイルを閉じる
f.close()

# JSONファイルを閉じる
f.close()

# 以下、json_dataの中身を確認するためのコード
print(json_data)
