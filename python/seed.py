import firebase_admin
from firebase_admin import credentials
from firebase_admin import firestore

# Use a service account.
cred = credentials.Certificate('serviceAccountKey.json')
app = firebase_admin.initialize_app(cred)
db = firestore.client()

# public/bank.jsonを読み込んで、Firestoreに書き込む

import json

# JSONファイルを読み込む
f = open('public/bank.json', 'r')
json_data = json.load(f)

# JSONファイルをFirestoreに書き込む
# for data in json_data:
#     db.collection('bank').add(data)
    
for data in json_data:
    # 各データが文字列で、空でないことを確認
    if all(isinstance(key, str) and key for key, value in data.items()):
        db.collection('bank').add(data)
    else:
        print(f"Invalid data: {data}")
       
f.close()
