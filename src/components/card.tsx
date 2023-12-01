interface CardProps {
  title: string
  description: string
}

export function Card ({ title, description }: CardProps) {
  return (
    <div>
      <span className='text-zinc-900 font-semibold block mb-1'>{title}</span>
      <p className='text-zinc-600 leading-relaxed'>{description}</p>
    </div>
  )
}
