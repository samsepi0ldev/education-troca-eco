import { getServerSession } from 'next-auth'
import { ReactNode } from 'react'
import { redirect } from 'next/navigation'

import { authOptions } from '@/utils/auth-options'

interface AuthenticatedRoutesProps {
  children?: ReactNode
}

export default async function AuthenticatedRoutes ({ children }: AuthenticatedRoutesProps) {
  const session = await getServerSession(authOptions)
  if (!session) {
    redirect('/entrar')
  }
  return <>{children}</>
}