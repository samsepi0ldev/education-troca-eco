import { CustomLink } from '@/components/custom-link'
import { Header } from '@/components/header'
import { ReactNode } from 'react'

interface DashboardLayoutProps {
  children?: ReactNode
}

export default function DashboardLayout ({ children }: DashboardLayoutProps) {
  return (
    <main className='w-full h-screen bg-white md:px-56 px-10'>
      <Header />
      <div>
        {children}
      </div>
    </main>
  )
}