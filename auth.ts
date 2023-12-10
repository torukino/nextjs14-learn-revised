import NextAuth from 'next-auth'
import Credentials from 'next-auth/providers/credentials'
import { authConfig } from './auth.config'
import { z } from 'zod'
import { sql } from '@vercel/postgres'
import type { User } from '@/app/lib/definitions'
import bcrypt from 'bcrypt'
const BUG = false
async function getUser(email: string): Promise<User | undefined> {
	try {
		// const user = await sql<User>`SELECT * FROM users WHERE email=${email}`

		const user = {
			id: '123',
			name: 'のぞみ',
			email: 'nozomi.mem@gmail.com',
			password: 'nozomi0131',
		}
		return user
	} catch (error) {
		console.error('Failed to fetch user:', error)
		throw new Error('Failed to fetch user.')
	}
}

export const { auth, signIn, signOut } = NextAuth({
	...authConfig,
	providers: [
		Credentials({
			async authorize(credentials) {
				BUG && console.log('credentials', JSON.stringify(credentials))
				const parsedCredentials = z.object({ email: z.string().email(), password: z.string().min(6) }).safeParse(credentials)
				BUG && console.log('parsedCredentials', JSON.stringify(parsedCredentials))

				if (parsedCredentials.success) {
					const { email, password } = parsedCredentials.data
					const user = await getUser(email)
					if (!user) return null
					BUG && console.log('user', JSON.stringify(user))
					// const passwordsMatch = await bcrypt.compare(password, user.password)
					const passwordsMatch = password === user.password
					BUG && console.log('passwordsMatch', JSON.stringify(passwordsMatch))
					if (passwordsMatch) return user
				}

				BUG && console.log('Invalid credentials')
				return null
			},
		}),
	],
})
