import { ListProducts } from '@/domain/usecases'

export interface ListProductsRepository {
  listAll: () => Promise<ListProductsRepository.Output>
}

export namespace ListProductsRepository {
  export type Output = ListProducts.Output
}