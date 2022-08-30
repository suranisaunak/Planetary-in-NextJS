import NextAuth, { NextAuthOptions } from 'next-auth'
import GoogleProvider from 'next-auth/providers/google'
import AppleProvider from "next-auth/providers/apple"

export const authOptions: NextAuthOptions = {
	providers: [
		GoogleProvider({
			clientId: process.env.GOOGLE_CLIENT_ID, // 'Your Google Client ID'
			clientSecret: process.env.GOOGLE_CLIENT_SECRET, //  'Your Google Client SECRET'
		}),
		AppleProvider({
			clientId: process.env.APPLE_ID,
			clientSecret: process.env.APPLE_SECRET,
		  }),
		// you can add more providers here
	],
}

export default NextAuth(authOptions)
