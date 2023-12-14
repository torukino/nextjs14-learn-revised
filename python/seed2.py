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
    # ['みずほ銀行', '群銀個人', '群銀コロナ', '群銀法人']
    isAmountStr = ""
    outAmountStr = ""
    account = ""
    if doc.to_dict()['inM'] != "":
        isAmountStr = doc.to_dict()['inM']
        account = "みずほ銀行"
    if doc.to_dict()['outM'] != "":
        outAmountStr = doc.to_dict()['outM']
        account = "みずほ銀行"
    if doc.to_dict()['inI'] != "":
        isAmountStr = doc.to_dict()['inI']
        account = "群銀個人"
    if doc.to_dict()['outI'] != "":
        outAmountStr = doc.to_dict()['outI']
        account = "群銀個人"
    if doc.to_dict()['inC'] != "":
        inAmountStr = doc.to_dict()['inC']
        account = "群銀コロナ"
    if doc.to_dict()['outC'] != "":
        outAmountStr = doc.to_dict()['outC']
        account = "群銀コロナ"
    if doc.to_dict()['inH'] != "":
        inAmountStr = doc.to_dict()['inH']
        account = "群銀法人"
    if doc.to_dict()['outH'] != "":
        outAmountStr = doc.to_dict()['outH']
        account = "群銀法人"
    
        
    doc_ref = db.collection('reminder').document()     
    data={
        "id": doc_ref.id,
        "reminder": doc.to_dict()['reminder'],
        "status": doc.to_dict()['status'],
        "account": account,
        "isAmountStr": isAmountStr,
        "outAmountStr":outAmountStr,
    }
    doc_ref.set(data)

