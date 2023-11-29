import { Controller } from '@/presentation/controllers'
import { HttpResponse } from '@/presentation/protocols'
import { ok, serverError, badRequest } from '@/presentation/helpers'

import { Login } from '@/domain/usecases'
import { UnauthorizedError } from '@/presentation/errors'

type Request = {
  email: string
  password: string
}

export class LoginController extends Controller {
  constructor (private readonly loginUser: Login) {
    super()
  }

  async perform({ email, password }: Request): Promise<HttpResponse> {
    try {
      const data = await this.loginUser.login({ email, password })
      return ok(data)
    } catch (error) {
      if (error instanceof UnauthorizedError) return badRequest(error)
      return serverError(error)
    }
  }
}