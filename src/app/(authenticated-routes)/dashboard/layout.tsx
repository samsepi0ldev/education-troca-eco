import { CustomLink } from '@/components/custom-link'
import { Header } from '@/components/header'
import { ReactNode } from 'react'

interface DashboardLayoutProps {
  children?: ReactNode
}

export default function DashboardLayout ({ children }: DashboardLayoutProps) {
  return (
    <main className='w-full h-screen bg-white max-md:px-10 max-lg:px-16 max-xl:px-36 px-56'>
      <Header />
      <div>
        {children}
      </div>
    </main>
  )
}