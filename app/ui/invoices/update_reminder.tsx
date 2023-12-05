
import { updateRemindersCollectionFromBankCollection } from '@/app/lib/data'

export function UpdateReminderInFirebaseButton() {
	
	const updateReminder = async () => {
	
	await updateRemindersCollectionFromBankCollection()
	}

	return (
		<div>
			<div className="bg-red-500" onClick={updateReminder}> 
				更新リマインダー
			</div>
		</div>
	)
}

