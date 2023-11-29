import { getServerSession } from 'next-auth'
import { ReactNode } from 'react'
import { redirect } from 'next/navigation'

import { authOptions } from '@/app/api/auth/[...nextauth]/route'

interface AuthenticatedRoutesProps {
  children?: ReactNode
}

export default async function PublicRoutes ({ children }: AuthenticatedRoutesProps) {
  const session = await getServerSession(authOptions)
  if (session) {
    redirect('/dashboard')
  }
  return <>{children}</>
}