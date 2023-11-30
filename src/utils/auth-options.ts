import { AuthOptions } from 'next-auth'
import Credentials from 'next-auth/providers/credentials'

import { api } from '@/lib/api'

export const authOptions: AuthOptions = {
  providers: [
    Credentials({
      name: 'credentials',
      credentials: {
        email: { label: 'email', type: 'text' },
        password: { label: 'password', type: 'password' }
      },
      async authorize (credentials, req) {
        const response = await api.post('/auth', {
          email: credentials?.email,
          password: credentials?.password
        })
        if (response.data.verified) return response.data
        if (response.data.user) {
          return response.data
        }
        return null
      }
    })
  ],
  pages: {
    signIn: '/entrar',
    error: '/error'
  },
  session: {
    strategy: 'jwt',
  },
  secret: process.env.NEXTAUTH_SECRET,
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.user = user
      }
      return token
    },
    async session({ session, token, user }) {
      session = token.user as any
      return session
    }
  }
}
