import Image from 'next/image'
import Link from 'next/link'

import signUpBg from '@/assets/sign-up-bg.jpg'
import { Input } from '@/components/input'
import { BackButton } from '@/components/back-button'
import { AsyncButton } from '@/components/async-button'

export default function Login () {
  return (
    <main className='w-full h-screen'>
      <BackButton />
      <Image
        src={signUpBg}
        alt='Agricultora'
        className='w-2/6 h-full fixed inset-0 object-cover'
      />
      <div className='w-2/3 h-full ml-auto bg-white px-60 flex flex-col items-center justify-center'>
        <form className='flex flex-col w-full max-w-lg'>
          <span className='text-3xl font-bold text-zinc-800'>Registre-se na plataforma</span>
          <span className='font-medium text-zinc-500 mb-9 mt-3'>Por favor preencha suas informações abaixo</span>
          <Input text='Nome' type='text' name='name' icon='Mail' />
          <Input text='Email' type='text' name='email' icon='Lock' />
          <Input text='WhatsApp' type='text' name='phoneNumber' icon='Phone' />
          <Input text='Endereço' type='text' name='address' icon='Milestone' />
          <Input text='Senha' type='password' name='password' icon='Lock' />
          <Input text='Re-Senha' type='password' name='passwordConfirmation' icon='Lock' />
          <AsyncButton isLoading={false}>
            Cadastrar -&gt;
          </AsyncButton>
          <div className='w-full pt-7 border-t border-zinc-200 mt-8 flex items-center justify-between'>
            <span className='font-medium text-zinc-500'>Ja tem uma conta?</span>
            <Link className='font-semibold text-violet-500 hover:underline underline-offset-2' href='/entrar'>Entre em sua conta</Link>
          </div>
        </form>
      </div>
    </main>
  )
}