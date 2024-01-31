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

# firestoreの”reminder”collectionからデータを取得する
reminder_ref = db.collection('reminder')
reminders_ = reminder_ref.stream()

reminders = []
i=0
for reminder in reminders_:
    i +=1
    print(i,reminder.to_dict())
    reminders.append(reminder)    


# docsのdocを取り出して、reminderの値（reminderOrgとする）を取得する
# remindersから、reminderOrgの値が一致するreminderのid(reminderId)を取得する
# bankのdocにreminderIdを加えて、
# 再び、同じidを有する"bank"collectionのdocumentに登録する
i = 0
for doc in docs:
    reminderOrg = doc.to_dict()['reminder']
    i += 1
    print(i,"reminderOrg:", reminderOrg)
    j = 0
    for reminder in reminders:
        j += 1
        print("j = ",j, "reminder:", reminder.to_dict()["reminder"], "reminderOrg:", reminderOrg )
        if reminder.to_dict()["reminder"]== reminderOrg:
            reminderId = reminder.to_dict()['id']
            reminder = reminder.to_dict()['reminder']
            org = doc.to_dict()
            org['reminderId'] = reminderId
            print("--- ", j, "@@", org["reminderId"], org["reminder"])
            #　以下、"bank"collectionの同じidのdocumentに上書き登録する
            doc_ref = db.collection('bank').document(doc.id)
            doc_ref.set(org)
