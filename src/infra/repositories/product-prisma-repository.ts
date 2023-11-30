import { ListProductsRepository } from '@/data/protocols'
import { prisma } from '@/infra/repositories/prisma'

export class ProductPrismaRepository implements ListProductsRepository {
  async listAll (): Promise<ListProductsRepository.Output> {
    const products = await prisma.product.findMany()
    return products
  }
}
