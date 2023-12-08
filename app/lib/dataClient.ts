import { BANK } from '@/types/bank'
import { collection, doc, getDocs, getFirestore, setDoc } from 'firebase/firestore'
import { FirebaseError } from 'firebase/app'
import { app } from '@/app/lib/firebaseConfigClient'

export async function fetchAllBankClient(): Promise<BANK[]> {
	const db = getFirestore(app)
	const data: BANK[] = []
	try {
		const ref = collection(db, 'bank')
		const list = await getDocs(ref)
		list.forEach(s => {
			data.push(s.data() as BANK)
		})
		// dateでソート
		data.sort((a, b) => {
			const dateA = new Date(a.date)
			const dateB = new Date(b.date)
			if (dateA < dateB) return -1
			if (dateA > dateB) return 1
			return 0
		})
		return data
	} catch (e) {
		const error = e as FirebaseError
		alert(`銀行コレクションの取得（）:エラーコード:${error.code}\nエラーメッセージ:${error.message}`)
		return []
	}
}

export async function updateBankClient(bank: BANK): Promise<void> {
	const db = getFirestore(app)
	try {
		if (bank.id) {
			const ref = doc(db, 'bank', bank.id)
			bank.id = ref.id
		}
		const ref = doc(db, 'bank', bank.id)
		await setDoc(ref, bank)
	} catch (e) {
		const error = e as FirebaseError
		alert(`銀行コレクションの更新（）:エラーコード:${error.code}\nエラーメッセージ:${error.message}`)
	}
}
