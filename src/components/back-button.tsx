'use client'

import { useRouter } from 'next/navigation'
import { twMerge } from 'tailwind-merge'

interface BackButtonProps {
  theme?: 'light' | 'dark'
}
export function BackButton ({ theme = 'light' }: BackButtonProps) {
  const route = useRouter()
  return (
    <button
      onClick={route.back}
      className={twMerge(
        'w-12 h-12 rounded-lg flex items-center justify-center absolute top-10 left-10 z-10 text-3xl text-white bg-black/10 opacity-50 hover:opacity-100 transition-opacity',
        theme === 'dark' && 'bg-black/50 opacity-80'
        )}>
      &lt;-
    </button>
  )
}