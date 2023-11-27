import { icons } from 'lucide-react'
import { InputHTMLAttributes } from 'react'

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  icon: keyof typeof icons
  text: string
}

export function Input ({ icon, text, ...props }: InputProps) {
  const Icon = icons[icon]
  return (
    <label className='flex relative rounded-lg bg-zinc-100 py-5 px-4 text-zinc-400 border-2 mt-4 [&:has(:focus)]:bg-white [&:has(:valid)]:bg-white [&:has(:focus)]:border-violet-200 [&:has(:valid)]:border-violet-200'>
      <input  className='peer outline-none bg-transparent translate-x-10 text-zinc-700 font-medium' required {...props} />
      <Icon size={24} className='absolute left-4 top-1/2 -translate-y-1/2 peer-focus:text-violet-500 peer-valid:text-violet-500' />
      <span className='px-1 font-medium absolute left-12 top-1/2 -translate-y-1/2 peer-focus:text-xs peer-valid:text-xs peer-focus:top-0 peer-valid:top-0 peer-focus:left-4 peer-valid:left-4 peer-focus:bg-white peer-valid:bg-white peer-focus:text-violet-500 peer-valid:text-violet-500 transition-all'>{text}</span>
    </label>
  )
}