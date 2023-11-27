'use client'

import Link, { LinkProps } from 'next/link'
import { ReactNode } from 'react'
import { icons } from 'lucide-react'
import { usePathname } from 'next/navigation'

interface CustomLinkProps extends LinkProps {
  children?: ReactNode
  icon: keyof typeof icons
}

export function CustomLink ({ children, icon, ...props }: CustomLinkProps) {
  const LucideIcon = icons[icon]
  const pathname = usePathname()
  const isActive = pathname === props.href
  return (
    <Link
      data-active={isActive}
      className='group flex items-center justify-center gap-4 font-medium text-zinc-500 py-2 px-4 rounded hover:bg-zinc-100 hover:text-zinc-800 data-[active=true]:text-zinc-800 data-[active=true]:font-semibold transition-colors'
      {...props}
    >
      <LucideIcon className='group-data-[active=true]:text-violet-500' />
      {children}
    </Link>
  );
}