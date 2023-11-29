import { api } from '@/lib/api'
import NextAuth, { AuthOptions } from 'next-auth'
import Credentials from 'next-auth/providers/credentials'

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

export const handler = NextAuth(authOptions)

export { handler as GET, handler as POST }
