import { LoginUser } from '@/domain/entities'
import { Login } from '@/domain/usecases'
import { FindUserByEmail, TokenGenerator, Decrypt } from '@/data/protocols'
import { UnauthorizedError } from '@/presentation/errors'

export class DbLogin implements Login {
  constructor (
    private readonly findUserByEmail: FindUserByEmail,
    private readonly decrypt: Decrypt,
    private readonly tokenGenerator: TokenGenerator
  ) {}

  async login ({ email, password }: Login.Input): Promise<LoginUser> {
    const user = await this.findUserByEmail.findByEmail(email)
    if (user !== null) {
      const isValid = await this.decrypt.decrypt(password, user.password)
      if (isValid) {
        const { accessToken } = await this.tokenGenerator.generate({
          sub: user.id,
          name: user.name,
          email: user.email
        })
        const { accessToken: refreshToken } = await this.tokenGenerator.generate({
          sub: user.id
        })
        return {
          user: {
            id: user.id,
            name: user.name,
            email: user.email,
            whatsapp: user.whatsapp,
            address: user.address,
            verified: user.verified
          },
          accessToken,
          refreshToken
        }
      }
    }
    throw new UnauthorizedError()
  }
}