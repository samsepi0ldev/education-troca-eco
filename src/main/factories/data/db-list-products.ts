import { DbListProducts } from '@/data/usecases'
import { ProductPrismaRepository } from '@/infra/repositories'

export const makeDbListProducts = (): DbListProducts => {
  const productRepo = new ProductPrismaRepository()
  return new DbListProducts(productRepo)
}