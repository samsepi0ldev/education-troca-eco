import { Loader, Loader2 } from 'lucide-react'

import { ReactNode } from 'react'

interface AsyncButtonProps {
  children?: ReactNode
  isLoading?: boolean
}

export function AsyncButton ({ children, isLoading }: AsyncButtonProps) {
  return (
    <button
      disabled={isLoading}
      className='w-fit rounded-lg bg-violet-500 text-white font-semibold p-4 self-end mt-4 hover:bg-violet-600 transition-colors disabled:hover:bg-violet-400 disabled:bg-violet-400 disabled:cursor-not-allowed '>
      {isLoading ? <Loader2 className='animate-spin' /> : children}
    </button>
  );
}
