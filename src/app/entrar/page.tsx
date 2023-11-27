import Image from 'next/image'
import Link from 'next/link'

import loginBg from '@/assets/login-bg.jpg'
import { Input } from '@/components/input'
import { BackButton } from '@/components/back-button'
import { AsyncButton } from '@/components/async-button'

export default function Login () {
  return (
    <main className='w-full h-screen'>
      <BackButton theme='dark' />
      <Image
        src={loginBg}
        alt='Agricultora'
        className='w-2/6 h-full fixed inset-0 object-cover'
      />
      <div className='w-2/3 h-full ml-auto bg-white px-60 flex flex-col items-center justify-center'>
        <form className='flex flex-col w-full max-w-lg'>
          <span className='text-3xl font-bold text-zinc-800'>Entrar na plataforma</span>
          <span className='font-medium text-zinc-500 mb-9 mt-3'>Entre com seu email e senha</span>
          <Input text='Email' type='text' name='email' icon='Mail' />
          <Input text='Senha' type='password' name='password' icon='Lock' />
          <AsyncButton>
            Entrar -&gt;
          </AsyncButton>
          <div className='w-full pt-7 border-t border-zinc-200 mt-8 flex items-center justify-between'>
            <span className='font-medium text-zinc-500'>Ainda nao tem uma conta?</span>
            <Link className='font-semibold text-violet-500 hover:underline underline-offset-2' href='/registrar'>Crie uma conta agora</Link>
          </div>
        </form>
      </div>
    </main>
  )
}