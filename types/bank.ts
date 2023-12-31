// 変数
// date,class,reminder,inM,outM,resM,inI,outI,resI,inC,outC,resC,inH,outH,resC,res,

export interface BANK {
	id: string
	date: string
	account: string | undefined
	status: string | undefined
	reminder: string
	reminderId: string
	inM: string
	outM: string
	resM: string
	inI: string
	outI: string
	resI: string
	inC: string
	outC: string
	resC: string
	inH: string
	outH: string
	resH: string
	res: string
}

export const initBANK: BANK = {
	id: '',
	date: '',
	status: 'undef',
	account: undefined,
	reminder: '',
	reminderId: '',
	inM: '',
	outM: '',
	resM: '',
	inI: '',
	outI: '',
	resI: '',
	inC: '',
	outC: '',
	resC: '',
	inH: '',
	outH: '',
	resH: '',
	res: '',
}

export interface BANKINPUT {
	id?: string // IDフィールド
	date?: string | undefined // 日付フィールド
	reminder?: string // 摘要フィールド
	reminderId?: string
	account?: string | undefined
	status?: string
	inAmount?: number // 入金額フィールド
	outAmount?: number // 出金額フィールド
}

export type StateBank = {
	errors?: BANKINPUT
	message?: string
}

export interface BANKPLUS extends BANK {
	inAmountStr: string
	outAmountStr: string
}
