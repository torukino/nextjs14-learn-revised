import firebase_admin
from firebase_admin import credentials
from firebase_admin import firestore

# Use a service account
cred = credentials.Certificate('serviceAccountKey.json')
app = firebase_admin.initialize_app(cred)
db = firestore.client()

# Firestoreから"bank"collection データを取得する
bank_ref = db.collection('bank')
docs = bank_ref.stream()

# reminderの値を取得して、ユニークな値をリストにする
reminder_list = []
for doc in docs:
    reminder_list.append(doc.to_dict()['reminder'])
reminder_list = list(set(reminder_list))

print(reminder_list)

# firestoreの”reminder”collectionに
# idを取得してから、reminder_listからのreminderとidを要素として登録する
for reminder in reminder_list:
    doc_ref = db.collection('reminder').document()
    data = {
        'id': doc_ref.id,
        'reminder': reminder
    }
    doc_ref.set(data)

# firestoreの”reminder”collectionからデータを取得する
reminder_ref = db.collection('reminder')
docs = reminder_ref.stream()



