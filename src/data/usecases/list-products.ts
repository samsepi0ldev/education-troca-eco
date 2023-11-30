import { ListProducts } from '@/domain/usecases'
import { ListProductsRepository } from '@/data/protocols'

export class DbListProducts implements ListProducts {
  constructor (private readonly listProductsRepository: ListProductsRepository) {}

  async listAll (): Promise<ListProducts.Output> {
    return await this.listProductsRepository.listAll()
  } 
}