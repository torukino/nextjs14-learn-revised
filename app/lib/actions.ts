'use server'
import { firestore } from '@/app/lib/firebaseConfig'
import { BANK } from '@/types/bank'
import { revalidatePath } from 'next/cache'
import { redirect } from 'next/navigation'

export async function myAction(formData: FormData) {
	// console.log('formData', formData.get('name'))
	await firestore.collection('sample').add({ name: formData.get('name') })
}

export async function createBank(formData: FormData): Promise<FormData> {
	// Insert data into the database
	try {
		await firestore.collection('bank').add(formData)
	} catch (error) {
		console.log('Error creating bank', error)
	}

	// Revalidate the cache for the invoices page and redirect the user.
	revalidatePath('/dashboard/invoices')
	redirect('/dashboard/invoices')

  return formData


}
