'use client'

import * as Dropdown from '@radix-ui/react-dropdown-menu'
import { Cog, LogOut } from 'lucide-react'
import { ReactNode } from 'react'

interface DropdownMenuProps {
  children?: ReactNode
}

export function DropdownMenu ({ children }: DropdownMenuProps) {
  return (
    <Dropdown.Root>
      <Dropdown.Trigger asChild>
        {children}
      </Dropdown.Trigger>
      <Dropdown.Portal>
        <Dropdown.Content
          sideOffset={8}
          align='start'
          className='p-4 w-full max-w-max min-w-[200px] bg-zinc-100 flex flex-col items-center rounded-lg'>
          <button className='w-full flex items-center justify-start gap-2 hover:bg-white text-zinc-800 px-4 py-2 pl-6 rounded text-sm'>
            <Cog size={16} />
            Configuração
          </button>
          <button className='w-full flex items-center justify-start gap-2 hover:bg-white text-zinc-800 px-4 py-2 pl-6 rounded text-sm'>
            <LogOut size={16} />
            Sair
          </button>
        </Dropdown.Content>
      </Dropdown.Portal>
    </Dropdown.Root>
  )
}
