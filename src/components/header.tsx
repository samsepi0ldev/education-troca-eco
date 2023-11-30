import Image from 'next/image'
import { ChevronDown } from 'lucide-react'
import { getServerSession } from 'next-auth'

import { CustomLink } from '@/components/custom-link'
import { DropdownMenu } from '@/components/dropdown-menu'
import logoTrocaEco from '@/assets/logo.png'
import { authOptions } from '@/utils/auth-options'

export async function Header () {
  const session = await getServerSession(authOptions)
  return (
    <header className='w-full h-32 flex items-center justify-between border-b border-b-zinc-200'>
      <div className='flex items-center gap-x-4'>
        <Image src={logoTrocaEco} width={40} height={40} alt='Logo' />
        <span className='text-zinc-700 font-medium'>TrocaEco</span>
      </div>
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
        <DropdownMenu>
          <button className='flex items-center justify-center gap-2 px-4 py-2 text-zinc-700 rounded-lg bg-zinc-100'>
            <Image
              className='mr-2 rounded-full'
              src='https://api.dicebear.com/7.x/avataaars-neutral/jpg?seed=Cali'
              width={40}
              height={40}
              alt='Avatar' />
            <span className='font-medium'>{session?.user.name.split(' ').shift()}</span>
            <ChevronDown strokeWidth={3} size={16} />
          </button>
        </DropdownMenu>
      </div>
    </header>
  )
}