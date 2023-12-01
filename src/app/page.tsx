import Image from 'next/image'
import Link from 'next/link'
import { Leaf, LogIn, Search, Trophy, UserRound } from 'lucide-react'
import { getServerSession } from 'next-auth'

import { authOptions } from '@/utils/auth-options'
import logoTrocaEco from '@/assets/logo.png'
import { Card } from '@/components/card'

const aboutSections = [
  {
    title: 'Descrição',
    description: 'Bem-vindo ao EcoTroca, o seu site dedicado à promoção da sustentabilidade e à recompensa das boas práticas ambientais. Aqui, acreditamos que cada pequena ação pode fazer a diferença no nosso planeta, e é por isso que criamos uma plataforma inovadora que incentiva o cadastro de produtos com selo verde por pontos em troca de prêmios básicos.'
  },
  {
    title: 'Objetivos',
    description: 'Sustentabilidade na Prática: No EcoTroca, encorajamos os usuários a adotarem um estilo de vida mais sustentável, promovendo a compra de produtos sustentáveis.'
  },
  {
    title: 'Troque por Pontos',
    description: 'Ao adquirir produto com o selo verde, basta procura-lo e cadastra-lo em nosso sistema para receber os pontos que logo poderão ser trocados por prêmios.'
  },
  {
    title: 'Troque por Pontos',
    description: 'Ao adquirir produto com o selo verde, basta procura-lo e cadastra-lo em nosso sistema para receber os pontos que logo poderão ser trocados por prêmios.'
  },
  {
    title: 'Prêmios Básicos',
    description: 'Oferecemos uma gama de prêmios básicos que atendem às necessidades diárias, como produtos de higiene pessoal, materiais de escritório e muito mais. Assim, você pode ser recompensado enquanto contribui para um mundo mais verde.'
  },
  {
    title: 'Impacto Positivo',
    description: 'A ação sustentável que você realiza no EcoTroca contribui para a preservação do meio ambiente diminuindo os produtos testados em animais e etc. Juntos, podemos criar um impacto positivo no mundo.'
  },
]

export default async function Home() {
  const session = await getServerSession(authOptions)
  return (
    <main>
      <header className='bg-white shadow-md flex items-center justify-between h-16 px-20 uppercase z-20'>
        <div className='flex items-center gap-10 text-zinc-700'>
          <div className='flex items-center gap-x-4'>
            <Image src={logoTrocaEco} width={40} height={40} alt='Logo' />
            <span className='text-zinc-700 font-medium'>TrocaEco</span>
          </div>
          <a className='data-[active=true]:text-violet-500 data-[active=true]:font-bold rounded hover:bg-zinc-100 px-4 py-2 transition-colors' href='#'>Inicio</a>
          <a className='data-[active=true]:text-violet-500 data-[active=true]:font-bold rounded-md hover:bg-zinc-100 px-4 py-2 transition-colors' href='#about'>Sobre</a>
          <a className='data-[active=true]:text-violet-500 data-[active=true]:font-bold rounded-md hover:bg-zinc-100 px-4 py-2 transition-colors' href='#instruction'>Instrução</a>
          <a className='data-[active=true]:text-violet-500 data-[active=true]:font-bold rounded-md hover:bg-zinc-100 px-4 py-2 transition-colors' href='#contact'>Contato</a>
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
      <section className='text-3xl pt-20 px-20 flex items-center justify-center'>
        <p className='w-full max-w-5xl text-center text-violet-500'>Junte-se ao EcoTroca e faça parte dessa jornada emocionante em direção a um planeta mais sustentável. Troque seus pontos por prêmios básicos e seja parte da solução para um futuro mais verde!</p>
      </section>
      <section className='mt-10 px-20 pt-10'>
        <div className='flex flex-col items-center justify-center'>
          <span className='uppercase text-zinc-800'>Sobre</span>
          <h1 className='text-4xl text-zinc-800 font-bold'>Sobre Nossos Serviços</h1>
        </div>
        <div className='grid grid-cols-2 mt-20 gap-10'>
          <div className='flex flex-col gap-4'>
            {aboutSections.map((data, i) => (
              <Card
                key={i}
                title={data.title}
                description={data.description}
              />
            ))}
          </div>
          <div className='bg-white rounded-2xl p-10 shadow-zinc-200 shadow-2xl'>
            <span className='text-xl text-zinc-800 text-center block font-medium'>Superestrelas da Comunidade</span>
            <div className='w-fit p-4 rounded-3xl mx-auto flex flex-col items-center gap-4 mt-10 bg-violet-50'>
              <div className='flex items-center justify-center gap-2'>
                <Trophy className='text-orange-400' />
                <span className='font-semibold'>100</span>
              </div>
              <span className='text-sm text-zinc-600'>
                Usuários tem um total de <span className='text-zinc-900'>120</span>
              </span>
            </div>
            <div className='mt-10 flex flex-col gap-5'>
              {Array.from({ length: 10 }).map((_, i) => (
                <div key={i} className='flex items-center gap-2'>
                  <Trophy className='text-orange-400' />
                  <span>Nome</span>
                  <div className='flex-1 h-4 bg-zinc-200 rounded-md' />
                  <span>100</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      <section className='p-10 pt-20'>
        <div className='flex flex-col items-center'>
          <h1 className='text-2xl font-medium text-zinc-900'>TROCA DE PRODUTOS POR PONTOS</h1>
          <div className='grid grid-cols-5 gap-4 mt-10'>
            <div className='bg-white rounded-3xl shadow-2xl shadow-zinc-300 p-6 flex flex-col items-center justify-center gap-6'>
              <span className='text-zinc-900 font-medium'>Cadastro no EcoTroca</span>
              <p className='text-center text-zinc-500'>Crie uma conta no EcoTroca, clicando AQUI!- Entre nela para acessar a pagina principal.</p>
            </div>
            <div className='bg-white rounded-3xl shadow-2xl shadow-zinc-300 p-6 flex flex-col items-center justify-center gap-6'>
              <span className='text-zinc-900 font-medium'>Explorando a pagina principal</span>
              <p className='text-center text-zinc-500'>Navegue pelo pagina principal de produtos e benefícios disponíveis e utilizar pontos para troca.</p>
            </div>
            <div className='bg-white rounded-3xl shadow-2xl shadow-zinc-300 p-6 flex flex-col items-center justify-center gap-6'>
              <span className='text-zinc-900 font-medium'>Escolha do Produto</span>
              <p className='text-center text-zinc-500'>Selecione o produtos que deseja cadastrar em troca de seus pontos, leia as informações sobre o produto e verifique a quantidade de pontos que receberá.</p>
            </div>
            <div className='bg-white rounded-3xl shadow-2xl shadow-zinc-300 p-6 flex flex-col items-center justify-center gap-6'>
              <span className='text-zinc-900 font-medium'>Acúmulo de Pontos</span>
              <p className='text-center text-zinc-500'>Realize o cadastro de produtos que contenham o selo verde, acompanhe o saldo de pontos em seu perfil.</p>
            </div>
            <div className='bg-white rounded-3xl shadow-2xl shadow-zinc-300 p-6 flex flex-col items-center justify-center gap-6'>
              <span className='text-zinc-900 font-medium'>Recebimento do Ponto</span>
              <p className='text-center text-zinc-500'>Após a confirmação, aguarde o envio do pontos para o seu perfil.</p>
            </div>
          </div>
        </div>
        <div className='flex flex-col items-center mt-10'>
          <h1 className='text-2xl font-medium text-zinc-900'>TROCA DE PONTOS POR BENEFÍCIOS</h1>
          <div className='grid grid-cols-5 gap-4 mt-10'>
            <div className='bg-white rounded-3xl shadow-2xl shadow-zinc-300 p-6 flex flex-col items-center justify-center gap-6'>
              <span className='text-zinc-900 font-medium'>Acúmulo Contínuo de Pontos</span>
              <p className='text-center text-zinc-500'>Continue adquirindo produtos com selo verde e cadastrando eles no site para acumular mais pontos ao longo do tempo.</p>
            </div>
            <div className='bg-white rounded-3xl shadow-2xl shadow-zinc-300 p-6 flex flex-col items-center justify-center gap-6'>
              <span className='text-zinc-900 font-medium'>Explorando Benefícios</span>
              <p className='text-center text-zinc-500'>Visite a seção de benefícios e descubra as opções disponíveis para resgate.</p>
            </div>
            <div className='bg-white rounded-3xl shadow-2xl shadow-zinc-300 p-6 flex flex-col items-center justify-center gap-6'>
              <span className='text-zinc-900 font-medium'>Escolha do Benefício</span>
              <p className='text-center text-zinc-500'>Escolha o benefício que deseja resgatar.</p>
            </div>
            <div className='bg-white rounded-3xl shadow-2xl shadow-zinc-300 p-6 flex flex-col items-center justify-center gap-6'>
              <span className='text-zinc-900 font-medium'>Confirmação do Resgate</span>
              <p className='text-center text-zinc-500'>Confirme o resgate do benefício, garantindo que você atende aos requisitos necessários.</p>
            </div>
            <div className='bg-white rounded-3xl shadow-2xl shadow-zinc-300 p-6 flex flex-col items-center justify-center gap-6'>
              <span className='text-zinc-900 font-medium'>Aproveite os Benefícios</span>
              <p className='text-center text-zinc-500'>Desfrute dos benefícios resgatados, contribuindo para um estilo de vida mais sustentável e acessando oportunidades exclusivas na comunidade EcoTroca.</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
