import { LoginController } from '@/presentation/controllers'
import { makeDbLogin } from '@/main/factories/data'

export const makeLoginController = (): LoginController => {
  return new LoginController(makeDbLogin())
}
