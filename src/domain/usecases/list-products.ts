import { Product } from '@/domain/entities'

export interface ListProducts {
  listAll: () => Promise<ListProducts.Output>
}

export namespace ListProducts {
  export type Output = Product[]
}
