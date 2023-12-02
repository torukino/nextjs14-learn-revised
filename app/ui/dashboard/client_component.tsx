'use client'

export default function ClientComponent(props: { action: (formData: FormData) => Promise<void> }) {
	const { action } = props

	return (
		<div>
			<form action={action}>
				<label htmlFor="name">Name</label>
				<input type="text" name="name" value="foo" id="name" />
				<button type="submit">Submit</button>
			</form>
		</div>
	)
}
