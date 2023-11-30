import { Heading } from '@/components/heading'
import { Navigation } from '@/components/navigation'
import { api } from '@/lib/api'
import { Check, Sprout } from 'lucide-react'

interface Product {
  id: string
  name: string
  points: number
}

export default async function Dashboard () {
  const response = await api<Product[]>('/products')
  return (
    <div className='pt-5'>
      <Navigation />
      <div className='mt-10'>
        <Heading>
          Pagina inicial
        </Heading>

        <div className='grid grid-cols-2 gap-x-10 h-96 overflow-hidden'>
          <div className='w-full h-full overflow-y-auto pr-4 pb-10 scrollbar-thin scrollbar-track-zinc-100 scrollbar-thumb-zinc-300 scrollbar-thumb-rounded-full'>
            <table className='w-full border-separate border-spacing-y-2.5 table-fixed'>
              <thead>
                <tr className='font-regular text-sm text-zinc-500 [&>td]:px-5 [&>td]:py-4'>
                  <td>#</td>
                  <td>Nome</td>
                  <td>Pontos</td>
                  <td>Status</td>
                </tr>
              </thead>
              <tbody className='text-sm'>
                {response.data.map(({ id, name, points }) => (
                  <tr className='text-zinc-700 hover:bg-violet-500 hover:text-white group [&>td]:px-5 [&>td]:py-4 [&>td]:border transition-colors' key={id}>
                    <td className='group-hover:border-transparent group-hover:text-white border-r-transparent rounded-l-lg text-orange-400'>{id.split('-').shift()}</td>
                    <td className='group-hover:border-transparent border-x-transparent'>{name}</td>
                    <td className='group-hover:border-transparent border-x-transparent'>{points}</td>
                    <td className='group-hover:border-transparent border-l-transparent rounded-r-lg'>
                      <span className='w-6 text-xs px-2.5 py-1 flex items-center justify-center group-hover:bg-white group-hover:text-violet-500 bg-green-100 rounded-md text-green-800'>
                        <Check className='flex-shrink-0' strokeWidth={3} size={14} />
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className='w-full h-full overflow-y-auto pr-4 pb-10 scrollbar-thin scrollbar-track-zinc-100 scrollbar-thumb-zinc-300 scrollbar-thumb-rounded-full'>
            <table className='w-full border-separate border-spacing-y-2.5 table-fixed'>
              <thead>
                <tr className='font-regular text-sm text-zinc-500 [&>td]:px-5 [&>td]:py-4'>
                  <td>Nome</td>
                  <td>Pontos</td>
                  <td>Opção</td>
                </tr>
              </thead>
              <tbody className='text-sm'>
                {Array.from(({ length: 10 })).map((_,i) => (
                  <tr className='text-zinc-700 hover:bg-violet-500 hover:text-white group [&>td]:px-5 [&>td]:py-4 [&>td]:border transition-colors' key={i}>
                    <td className='border-r-transparent rounded-l-lg'>Lava louca brix</td>
                    <td className='border-x-transparent'>100</td>
                    <td className='border-l-transparent rounded-r-lg'>
                      <button className='group-hover:text-white group-hover:hover:bg-white group-hover:hover:text-violet-500 group-hover:transition-colors text-md font-semibold text-green-800 px-2 py-1 rounded-lg flex items-center gap-x-2'>
                        <Sprout />
                        Resgatar
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  )
}