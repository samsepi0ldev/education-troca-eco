import { Heading } from '@/components/heading'
import { Navigation } from '@/components/navigation'

export default function Products () {
  return (
    <div className='pt-5'>
      <Navigation />
      <div className='mt-10'>
        <Heading>
          Listagem e cadastro de produtos
        </Heading>
      </div>
    </div>
  )
}