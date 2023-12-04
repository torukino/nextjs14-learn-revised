// 変数
// date,class,reminder,inM,outM,resM,inI,outI,resI,inC,outC,resC,inH,outH,resC,res,

export interface BANK {
	date: string
	class?: string
	reminder: string
	inM?: string
	outM?: string
	resM: string
	inI?: string
	outI?: string
	resI: string
	inC?: string
	outC?: string
	resC: string
	inH?: string
	outH: string
	resH?: string
	res: string
}

export const initBANK: BANK = {
	date: '',
	class: '',
	reminder: '',
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
