import { HttpResponse } from '@/presentation/protocols'
import { serverError } from '@/presentation/helpers'

type Request = any

export abstract class Controller {
  abstract perform (request: Request): Promise<HttpResponse>

  async handle (request: Request) {
    try {
      return this.perform(request)
    } catch (error) {
      return serverError(error)
    }
  }
}