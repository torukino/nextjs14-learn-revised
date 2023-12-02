import 'server-only'
import { getFirestore } from 'firebase-admin/firestore'
import { getApps, initializeApp, cert } from 'firebase-admin/app'
import { readFileSync } from 'fs'
import { resolve } from 'path'

let a: any
if (!getApps().length) {
	// console.log('＠＠＠＠＠＠＠Initializing Firebase Admin SDK')

	const serviceAccount = JSON.parse(readFileSync(resolve(process.cwd(), 'serviceAccountKey.json'), 'utf8'))
	// console.log('serviceAccount', serviceAccount)
	a = initializeApp({
		projectId: process.env.FIREBASE_PROJECT_ID,
		credential: cert(serviceAccount),
	})
}
export const firestore = getFirestore(a)
