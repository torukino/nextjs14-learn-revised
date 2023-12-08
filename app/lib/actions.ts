import { firestore } from '@/app/lib/firebaseConfig'
import { BANK, BANK_INPUT, StateBank } from '@/types/bank'
import { revalidatePath } from 'next/cache'
import { redirect } from 'next/navigation'
import { convertFormDataintoBank } from '@/tools/convData'
import { fetchFirestore } from '@/app/lib/data'
import { recalculationBank } from '@/tools/recalculationBank'
import { fetchAllBankClient, updateBankClient } from '@/app/lib/dataClient'

// export async function myAction(formData: FormData) {
// 	// console.log('formData', formData.get('name'))
// 	await firestore.collection('sample').add({ name: formData.get('name') })
// }

export async function createBank(formData: FormData) {
	// console.log(`selectedReminder,
	// ${formData.get('selectedReminder')}
	// ${formData.get('selectedReminderId')}`)

	const rawFormData = {
		date: formData.get('date'),
		selectedReminder: formData.get('selectedReminder'),
		selectedReminderId: formData.get('selectedReminderId'),
		account: formData.get('account'),
		inAmount: Number(formData.get('inAmount')),
		outAmount: Number(formData.get('outAmount')),
		status: formData.get('status'),
	}

	const newBank = convertFormDataintoBank(rawFormData)

	console.log('rawFormData', JSON.stringify(rawFormData))
	console.log('new bank data:', JSON.stringify(newBank))

	const allBank: BANK[] = await fetchAllBankClient()
	allBank.push(newBank)
	const newAllBank = await recalculationBank(allBank)

	newAllBank.forEach(async bank => {
		await updateBankClient(bank)
	})

	// const n1 = newAllBank[newAllBank.length - 1]
	// const n2 = newAllBank[newAllBank.length - 2]
	// console.log(`${n2.date} 入金: ${n2.inM} 出金: ${n2.outM} 残高: ${n2.resM}`)
	// console.log(`${n1.date} 入金: ${n1.inM} 出金: ${n1.outM} 残高: ${n1.resM}`)

	// revalidatePath('/dashboard/invoices')
	redirect('/dashboard/invoices')
}
