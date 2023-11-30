import { ListProducts } from '@/domain/usecases'
import { Controller } from '@/presentation/controllers'
import { ok, serverError } from '@/presentation/helpers'
import { HttpResponse } from '@/presentation/protocols'

export class ListProductsController extends Controller {
  constructor (private readonly listProducts: ListProducts) {
    super()
  }
  
  async perform (): Promise<HttpResponse> {
    try {
      const data = await this.listProducts.listAll()
      return ok(data)
    } catch (error) {
      return serverError(error)
    }
  }
}