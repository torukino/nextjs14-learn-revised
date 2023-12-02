import ClientComponent from '@/app/ui/dashboard/client_component'
import { myAction } from '@/app/lib/actions'

export default function Page() {
	return (
		<main>
			<ClientComponent action={myAction} />
		</main>
	)
}
