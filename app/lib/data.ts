import { sql } from '@vercel/postgres'
import { CustomerField, CustomersTableType, InvoiceForm, InvoicesTable, LatestInvoiceRaw, User, Revenue } from './definitions'
import { formatCurrency } from './utils'
import { firestore } from '@/app/lib/firebaseConfig'
import { BANK } from '@/types/bank'
import { unstable_noStore as noStore, revalidatePath } from 'next/cache'
import { REMINDER, initReminder } from '@/types/reminder'
import { recalculationBank } from '@/tools/recalculationBank'
import { USER } from '@/types/user'

const BUG = false

export async function updateReminderDB(reminder: REMINDER): Promise<void> {
	noStore()
	try {
		await firestore.collection('reminder').doc(reminder.id).set(reminder)
	} catch (error) {
		BUG && console.log('Error reminder collection', error)
		throw new Error('Failed to update reminder.')
	}
}

export async function fetchReminderByReminderId(id: string): Promise<REMINDER> {
	const data: REMINDER[] = []
	await firestore
		.collection('reminder')
		.get()
		.then(querySnapshot => {
			querySnapshot.forEach(doc => {
				data.push(doc.data() as REMINDER)
			})
		})
		.catch(err => {
			console.log('Error getting all reminders', err)
		})

	let reminder: REMINDER | undefined = data.find(d => d.id === id)
	if (!reminder) throw new Error('Failed to fetch reminder.')
	return reminder
}

export async function fetchAllReminders(): Promise<REMINDER[]> {
	const data: REMINDER[] = []
	await firestore
		.collection('reminder')
		.get()
		.then(querySnapshot => {
			querySnapshot.forEach(doc => {
				data.push(doc.data() as REMINDER)
			})
		})
		.catch(err => {
			console.log('Error getting all reminders', err)
		})

	return data
}

export async function fetchUser(email: string): Promise<USER | undefined> {
	const data: USER[] = []
	await firestore
		.collection('users')
		.get()
		.then(querySnapshot => {
			querySnapshot.forEach(doc => {
				data.push(doc.data() as USER)
			})
		})
		.catch(err => {
			console.log('Error getting documents', err)
		})
	let user: USER | undefined = undefined
	data.forEach(d => {
		if (d.email === email) {
			user = d
		}
	})

	return user
}

export async function fetchBankById(id: string) {
	try {
		const date = await fetchAllBank()
		const bank = date.filter(d => d.id === id)
		BUG && console.log('fetchBankById', JSON.stringify(bank[0]))
		return bank[0]
	} catch (error) {
		console.log('fetchBankById', error)
	}
}
export async function updateBankDb(bank: BANK): Promise<void> {
	noStore()
	if (!bank.id) {
		//新たにfirestoreにドキュメントを追加して、bank.idを取得する
		const id = firestore.collection('bank').doc().id
		bank = { ...bank, id: id }
		BUG && console.log('updateBank 新たに発行されたid:', bank.id)
	}
	try {
		await firestore.collection('bank').doc(bank.id).set(bank)
	} catch (error) {
		BUG && console.log('Error bank collection', error)
		throw new Error('Failed to update bank.')
	}
}

export async function fetchReminderById(id: string): Promise<REMINDER> {
	noStore()
	try {
		const reminder = await firestore.collection('reminder').doc(id).get()
		return reminder.data() as REMINDER
	} catch (error) {
		BUG && console.log('Error reminder collection', error)
		throw new Error('Failed to fetch reminder.')
	}
}

export async function fetchAllBank(): Promise<any[]> {
	noStore()
	const data: BANK[] = []
	await firestore
		.collection('bank')
		.get()
		.then(querySnapshot => {
			querySnapshot.forEach(doc => {
				// console.log(`${doc.id} => ${doc.data().date}`)
				data.push(doc.data() as BANK)
			})
		})
		.catch(err => {
			console.log('Error getting documents', err)
		})

	//それぞれの残高でソート 同日付での順序づけをするために必要
	data
		.sort((a, b) => {
			const resMA = parseInt(a.resM.replaceAll(',', ''))
			const resMB = parseInt(b.resM.replaceAll(',', ''))
			if (resMA < resMB) return -1
			if (resMA > resMB) return 1
			return 0
		})
		.sort((a, b) => {
			const resIA = parseInt(a.resI.replaceAll(',', ''))
			const resIB = parseInt(b.resI.replaceAll(',', ''))
			if (resIA < resIB) return -1
			if (resIA > resIB) return 1
			return 0
		})
		.sort((a, b) => {
			const resCA = parseInt(a.resC.replaceAll(',', ''))
			const resCB = parseInt(b.resC.replaceAll(',', ''))
			if (resCA < resCB) return -1
			if (resCA > resCB) return 1
			return 0
		})
		.sort((a, b) => {
			const resHA = parseInt(a.resH?.replaceAll(',', ''))
			const resHB = parseInt(b.resH?.replaceAll(',', ''))
			if (resHA < resHB) return -1
			if (resHA > resHB) return 1
			return 0
		})

	// dateでソート
	data.sort((a, b) => {
		const dateA = new Date(a.date)
		const dateB = new Date(b.date)
		if (dateA < dateB) return -1
		if (dateA > dateB) return 1
		return 0
	})

	// data.forEach((d, i) => {
	// 	console.log(`${i} => ${d.date}`)
	// })

	const newAllBank = recalculationBank(data)

	return newAllBank
}

const BANK_ITEMS_PER_PAGE = 6
export async function fetchFilteredBank(reminder: string, currentPage: number) {
	const offset = (currentPage - 1) * BANK_ITEMS_PER_PAGE
	const data = await fetchAllBank()
	console.log('data.length', data.length)
	const reminders: string[] = data.map(d => d.reminder)
	// 変数 filteredReminders に、reminders の中から、reminder と部分一致する要素を抽出した配列を抽出
	const filteredReminders = reminders.filter(r => r.includes(reminder))
	// filteredRemindersを有するdataを抽出
	const filteredData = data.filter(d => filteredReminders.includes(d.reminder))

	let data_: BANK[] = []
	if (data.length > BANK_ITEMS_PER_PAGE) {
		data_ = filteredData.slice(offset, offset + BANK_ITEMS_PER_PAGE)
	} else {
		data_ = filteredData
	}

	return data_
}

export async function fetchBankPages(reminder: string) {
	const data: BANK[] = await fetchAllBank()
	const reminders: string[] = data.map(d => d.reminder)
	// 変数 filteredReminders に、reminders の中から、reminder と部分一致する要素を抽出した配列を抽出
	const filteredReminders = reminders.filter((r: string) => r.includes(reminder))
	// filteredRemindersを有するdataを抽出
	const filteredData = data.filter(d => filteredReminders.includes(d.reminder))
	const totalPages = Math.ceil(filteredData.length / BANK_ITEMS_PER_PAGE)
	return totalPages
}

// remindersコレクションからreminderの配列を取得する
export async function fetchReminders(): Promise<REMINDER[]> {
	noStore()
	const data: REMINDER[] = []
	await firestore
		.collection('reminder')
		.get()
		.then(querySnapshot => {
			querySnapshot.forEach(doc => {
				// console.log(`${doc.id} => ${doc.data().date}`)
				data.push(doc.data() as REMINDER)
			})
		})
		.catch(err => {
			console.log('Error reminder collection', err)
		})

	return data
}

export async function updateReminders(reminder: REMINDER) {
	const reminders: REMINDER[] = await fetchReminders()
	const reminders_ = reminders.filter(r => r.reminder !== reminder.reminder)
	reminders_.push(reminder)
	await firestore.collection('reminder').doc('reminder').set({
		reminders: reminders_,
	})
}

// "reminders"コレクションに、だぶりなしで追加保存する
// export async function updateRemindersCollectionFromBankCollection() {
// 	const data:BANK[] = await fetchFirestore()
// 	const remindersFromRemindersCollection:REMINDER[] = await fetchReminders()
// 	const remindersFromBankCollection: string[] = data.map(d => d.reminder)
// 	// remindersFromRemindersCollectionにはないremindersFromBankCollectionに含まれない要素を抽出
// 	const reminders = remindersFromBankCollection.filter(r => !remindersFromRemindersCollection.map(r => r.reminder).includes(r))
// 	// remindersを追加保存
// 	for (const r of reminders) {
// 		await firestore.collection('reminder').add({reminder: r})
// 	}
// }

// "reminders"コレクションに、だぶりなしで追加保存する
export async function updateRemindersCollectionFromBankCollection() {
	const data: BANK[] = await fetchAllBank()
	const remindersFromRemindersCollection: REMINDER[] = await fetchReminders()
	const remindersFromBankCollection: string[] = data.map(d => d.reminder)
	// remindersFromRemindersCollectionにはないremindersFromBankCollectionに含まれない要素を抽出
	const reminders = remindersFromBankCollection.filter(r => !remindersFromRemindersCollection.map(r => r.reminder).includes(r))
	// remindersを追加保存
	for (const r of reminders) {
		// 新しいドキュメントの参照を作成
		const newDocRef = firestore.collection('reminder').doc()
		// 新しいドキュメントのIDを取得
		const newDocId = newDocRef.id
		// ドキュメントを作成し、IDもフィールドに保存
		await newDocRef.set({ reminder: r, id: newDocId })
	}
}

export async function fetchLastestFirestore(): Promise<any[]> {
	noStore()
	const data: BANK[] = []
	await firestore
		.collection('bank')
		.get()
		.then(querySnapshot => {
			querySnapshot.forEach(doc => {
				// console.log(`${doc.id} => ${doc.data().date}`)
				data.push(doc.data() as BANK)
			})
		})
		.catch(err => {
			console.log('Error getting documents', err)
		})

	// resMでソート
	data.sort((a, b) => {
		const resMA = parseInt(a.resM.replaceAll(',', ''))
		const resMB = parseInt(b.resM.replaceAll(',', ''))
		if (resMA < resMB) return -1
		if (resMA > resMB) return 1
		return 0
	})

	// data.forEach((d, i) => {
	// 	console.log(`${i} => ${d.date}:${d.resM}`)
	// })

	const LIMIT = 5
	if (data.length > LIMIT) {
		return data.slice(0, LIMIT)
	}
	return data
}

export async function fetchRevenue() {
	// Add noStore() here prevent the response from being cached.
	// This is equivalent to in fetch(..., {cache: 'no-store'}).

	try {
		// Artificially delay a response for demo purposes.
		// Don't do this in production :)

		// console.log('Fetching revenue data...');
		// await new Promise((resolve) => setTimeout(resolve, 3000));

		const data = await sql<Revenue>`SELECT * FROM revenue`

		// console.log('Data fetch completed after 3 seconds.');

		return data.rows
	} catch (error) {
		console.error('Database Error:', error)
		throw new Error('Failed to fetch revenue data.')
	}
}

export async function fetchLatestInvoices() {
	try {
		const data = await sql<LatestInvoiceRaw>`
      SELECT invoices.amount, customers.name, customers.image_url, customers.email, invoices.id
      FROM invoices
      JOIN customers ON invoices.customer_id = customers.id
      ORDER BY invoices.date DESC
      LIMIT 5`

		const latestInvoices = data.rows.map(invoice => ({
			...invoice,
			amount: formatCurrency(invoice.amount),
		}))
		return latestInvoices
	} catch (error) {
		console.error('Database Error:', error)
		throw new Error('Failed to fetch the latest invoices.')
	}
}

export async function fetchCardData() {
	try {
		// You can probably combine these into a single SQL query
		// However, we are intentionally splitting them to demonstrate
		// how to initialize multiple queries in parallel with JS.
		const invoiceCountPromise = sql`SELECT COUNT(*) FROM invoices`
		const customerCountPromise = sql`SELECT COUNT(*) FROM customers`
		const invoiceStatusPromise = sql`SELECT
         SUM(CASE WHEN status = 'paid' THEN amount ELSE 0 END) AS "paid",
         SUM(CASE WHEN status = 'pending' THEN amount ELSE 0 END) AS "pending"
         FROM invoices`

		const data = await Promise.all([invoiceCountPromise, customerCountPromise, invoiceStatusPromise])

		const numberOfInvoices = Number(data[0].rows[0].count ?? '0')
		const numberOfCustomers = Number(data[1].rows[0].count ?? '0')
		const totalPaidInvoices = formatCurrency(data[2].rows[0].paid ?? '0')
		const totalPendingInvoices = formatCurrency(data[2].rows[0].pending ?? '0')

		return {
			numberOfCustomers,
			numberOfInvoices,
			totalPaidInvoices,
			totalPendingInvoices,
		}
	} catch (error) {
		console.error('Database Error:', error)
		throw new Error('Failed to fetch card data.')
	}
}

const ITEMS_PER_PAGE = 6
export async function fetchFilteredInvoices(query: string, currentPage: number) {
	const offset = (currentPage - 1) * ITEMS_PER_PAGE

	try {
		const invoices = await sql<InvoicesTable>`
      SELECT
        invoices.id,
        invoices.amount,
        invoices.date,
        invoices.status,
        customers.name,
        customers.email,
        customers.image_url
      FROM invoices
      JOIN customers ON invoices.customer_id = customers.id
      WHERE
        customers.name ILIKE ${`%${query}%`} OR
        customers.email ILIKE ${`%${query}%`} OR
        invoices.amount::text ILIKE ${`%${query}%`} OR
        invoices.date::text ILIKE ${`%${query}%`} OR
        invoices.status ILIKE ${`%${query}%`}
      ORDER BY invoices.date DESC
      LIMIT ${ITEMS_PER_PAGE} OFFSET ${offset}
    `

		return invoices.rows
	} catch (error) {
		console.error('Database Error:', error)
		throw new Error('Failed to fetch invoices.')
	}
}

export async function fetchInvoicesPages(query: string) {
	try {
		const count = await sql`SELECT COUNT(*)
    FROM invoices
    JOIN customers ON invoices.customer_id = customers.id
    WHERE
      customers.name ILIKE ${`%${query}%`} OR
      customers.email ILIKE ${`%${query}%`} OR
      invoices.amount::text ILIKE ${`%${query}%`} OR
      invoices.date::text ILIKE ${`%${query}%`} OR
      invoices.status ILIKE ${`%${query}%`}
  `

		const totalPages = Math.ceil(Number(count.rows[0].count) / ITEMS_PER_PAGE)
		return totalPages
	} catch (error) {
		console.error('Database Error:', error)
		throw new Error('Failed to fetch total number of invoices.')
	}
}

export async function fetchInvoiceById(id: string) {
	try {
		const data = await sql<InvoiceForm>`
      SELECT
        invoices.id,
        invoices.customer_id,
        invoices.amount,
        invoices.status
      FROM invoices
      WHERE invoices.id = ${id};
    `

		const invoice = data.rows.map(invoice => ({
			...invoice,
			// Convert amount from cents to dollars
			amount: invoice.amount / 100,
		}))

		return invoice[0]
	} catch (error) {
		console.error('Database Error:', error)
		throw new Error('Failed to fetch invoice.')
	}
}

export async function fetchCustomers() {
	try {
		const data = await sql<CustomerField>`
      SELECT
        id,
        name
      FROM customers
      ORDER BY name ASC
    `

		const customers = data.rows
		return customers
	} catch (err) {
		console.error('Database Error:', err)
		throw new Error('Failed to fetch all customers.')
	}
}

export async function fetchFilteredCustomers(query: string) {
	try {
		const data = await sql<CustomersTableType>`
		SELECT
		  customers.id,
		  customers.name,
		  customers.email,
		  customers.image_url,
		  COUNT(invoices.id) AS total_invoices,
		  SUM(CASE WHEN invoices.status = 'pending' THEN invoices.amount ELSE 0 END) AS total_pending,
		  SUM(CASE WHEN invoices.status = 'paid' THEN invoices.amount ELSE 0 END) AS total_paid
		FROM customers
		LEFT JOIN invoices ON customers.id = invoices.customer_id
		WHERE
		  customers.name ILIKE ${`%${query}%`} OR
        customers.email ILIKE ${`%${query}%`}
		GROUP BY customers.id, customers.name, customers.email, customers.image_url
		ORDER BY customers.name ASC
	  `

		const customers = data.rows.map(customer => ({
			...customer,
			total_pending: formatCurrency(customer.total_pending),
			total_paid: formatCurrency(customer.total_paid),
		}))

		return customers
	} catch (err) {
		console.error('Database Error:', err)
		throw new Error('Failed to fetch customer table.')
	}
}

export async function getUser(email: string) {
	try {
		const user = await sql`SELECT * FROM users WHERE email=${email}`
		return user.rows[0] as User
	} catch (error) {
		console.error('Failed to fetch user:', error)
		throw new Error('Failed to fetch user.')
	}
}
