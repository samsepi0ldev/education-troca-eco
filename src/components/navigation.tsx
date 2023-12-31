'use client'

import {  ChevronRight } from 'lucide-react'
import { usePathname } from 'next/navigation'

export function Navigation () {
  const pathnames = usePathname().split('/')
  pathnames.shift()
  return (
    <div className='w-fit rounded-lg bg-zinc-100 px-4 py-2.5 flex items-center justify-center gap-2 text-zinc-500'>
      {pathnames.map(path => (
          <div className='flex items-center justify-center gap-2 [&>svg]:last:hidden' key={path}>
            <span className='capitalize text-xs'>{path}</span>
            <ChevronRight strokeWidth={2} size={20} />
          </div>
        ))}
    </div>
  )
}