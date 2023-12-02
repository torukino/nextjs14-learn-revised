'use server'
import { firestore } from '@/app/lib/firebaseConfig'

export async function myAction(formData: FormData) {
	console.log('formData', formData.get('name'))
	await firestore.collection('sample').add({ name: formData.get('name') })
}
