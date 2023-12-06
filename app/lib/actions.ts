'use server'
import { firestore } from '@/app/lib/firebaseConfig'
import { BANK, BANK_INPUT, StateBank } from '@/types/bank'
import { revalidatePath } from 'next/cache'
import { redirect } from 'next/navigation'
import { convertFormDataintoBank } from '@/tools/convData'

// export async function myAction(formData: FormData) {
// 	// console.log('formData', formData.get('name'))
// 	await firestore.collection('sample').add({ name: formData.get('name') })
// }

export async function createBank(formData: FormData) {
	console.log(`selectedReminder, 
	${formData.get('selectedReminder')} 
	${formData.get('selectedReminderId')}`)

	const rawFormData = {
		date: formData.get('date'),
		selectedReminder: formData.get('selectedReminder'),
		selectedReminderId: formData.get('selectedReminderId'),
		account: formData.get('account'),
		inAmount: formData.get('inAmount'),
		outAmount: formData.get('outAmount'),
		status: formData.get('status'),
	}

	const newBank = convertFormDataintoBank(rawFormData)
	console.log('rawFormData', JSON.stringify(rawFormData))
	// console.log('new bank data:', JSON.stringify(newBank))

	//新たに作成した銀行データを追加する

	// Insert data into the database
	// try {
	// 	await firestore.collection('bank').add(formData)
	// } catch (error) {
	// 	console.log('Error creating bank', error)
	// }

	// Revalidate the cache for the invoices page and redirect the user.
	// revalidatePath('/dashboard/invoices')
	// redirect('/dashboard/invoices')
}
