import Image from 'next/image'
import Link from 'next/link'
import { LogIn, Search, UserRound } from 'lucide-react'

export default function Home() {
  const session = true
  return (
    <main>
      <header className='bg-white shadow-md flex items-center justify-between h-16 px-20 uppercase z-20'>
        <div className='flex items-center gap-10 text-zinc-700'>
          <div className='w-28 h-10 bg-slate-600 block mr-28' />
          <a data-active={true} className='data-[active=true]:text-violet-500 data-[active=true]:font-bold rounded hover:bg-zinc-100 px-4 py-2 transition-colors' href='#'>Inicio</a>
          <a className='data-[active=true]:text-violet-500 data-[active=true]:font-bold rounded-md hover:bg-zinc-100 px-4 py-2 transition-colors' href='#about'>Sobre</a>
          <a className='data-[active=true]:text-violet-500 data-[active=true]:font-bold rounded-md hover:bg-zinc-100 px-4 py-2 transition-colors' href='#webinars'>Webinars</a>
          <a className='data-[active=true]:text-violet-500 data-[active=true]:font-bold rounded-md hover:bg-zinc-100 px-4 py-2 transition-colors' href='#blog'>Blog</a>
        </div>
        <div className='flex items-center font-medium gap-2'>
          <span className='text-zinc-700'>+55 (11) 3030-3200</span>
          {session ? (
            <Link href='/dashboard' className='flex items-center font-semibold text-violet-600 hover:bg-violet-50 px-4 py-2 rounded-lg text-sm gap-2 ml-20 transition-colors'>
              <UserRound />
              Area de membro
            </Link>
          ): (
            <>
              <Link href='/entrar' className='flex items-center font-semibold text-violet-600 hover:bg-violet-50 px-4 py-2 rounded-lg text-sm gap-2 ml-20 transition-colors'>
                <LogIn />
                Sou membro
              </Link>
              <Link className='text-xs px-4 py-2 rounded-full shadow-md hover:bg-violet-500 hover:text-white transition-colors' href='/registrar'>
                Registrar
              </Link>
            </>
          )}
        </div>
      </header>
      <section className='h-52 pt-20 px-20 bg-gradient-to-t from-zinc-100 to-transparent flex flex-col'>
        <h1 className='text-4xl text-zinc-800 font-bold'>Pagina inicial</h1>
        <div className='flex items-center gap-4 bg-white py-4 px-6 w-2/5 shadow-lg [&:has(*:focus)]:bg-violet-50 text-zinc-500 mt-auto translate-y-6 transition-colors'>
          <Search size={16} />
          <input className='w-full outline-none bg-transparent' type="text" placeholder='Buscar' />
        </div>
      </section>
    </main>
  )
}
