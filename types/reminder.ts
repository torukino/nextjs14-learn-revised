export interface REMINDER {
	id: string
	reminder: string
	account: string
	inAmountStr: string
	outAmountStr: string
	status: string
}

export const initReminder: REMINDER = {
	id: '',
	reminder: '',
	account: '',
	inAmountStr: '',
	outAmountStr: '',
	status: '',
}
