import { ReactNode } from 'react'
import { twJoin } from 'tailwind-merge'

const sizes = {
  sm: 'text-xl',
  lg: 'text-2xl',
  xl: 'text-3xl'
}

interface HeadingProps {
  size?: keyof typeof sizes
  children?: ReactNode
}

export function Heading ({ size = 'sm', children }: HeadingProps) {
  return (
    <span className={twJoin(
      'font-semibold text-zinc-800 my-4 block',
      sizes[size]
    )}>
      {children}
    </span>
  )
}