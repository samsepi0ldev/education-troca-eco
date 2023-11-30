import { ListProductsController } from '@/presentation/controllers'
import { makeDbListProducts } from '@/main/factories/data'

export const makeListProductsController = (): ListProductsController => {
  return new ListProductsController(makeDbListProducts())
}
