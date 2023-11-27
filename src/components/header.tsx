import Image from 'next/image'
import { ChevronDown } from 'lucide-react'

import { CustomLink } from '@/components/custom-link'

export function Header () {
  return (
    <header className='w-full h-32 flex items-center justify-between border-b border-b-zinc-200'>
      <span>Logo</span>
      <div className='flex items-center justify-center gap-5'>
        <CustomLink
          icon='LayoutDashboard'
          href='/dashboard'>
          Dashboard
        </CustomLink>
        <CustomLink
          icon='Barcode'
          href='/dashboard/produtos'>
          Produtos
        </CustomLink>
        <CustomLink
          icon='ShoppingBag'
          href='/dashboard/beneficios'>
          Benefícios
        </CustomLink>
      </div>
      <div>
        <button className='flex items-center justify-center gap-2 px-4 py-2 text-zinc-700 rounded-lg bg-zinc-100'>
          <Image
            className='mr-2 rounded-full'
            src='https://api.dicebear.com/7.x/avataaars-neutral/jpg?seed=Cali'
            width={40}
            height={40}
            alt='Avatar' />
          <span className='font-medium'>Peter</span>
          <ChevronDown strokeWidth={3} size={16} />
        </button>
      </div>
    </header>
  )
}