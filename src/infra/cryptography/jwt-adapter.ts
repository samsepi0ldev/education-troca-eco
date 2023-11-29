import * as jose from 'jose'

import { TokenGenerator } from '@/data/protocols'


export class JwtAdapter implements TokenGenerator {
  async generate ({ sub, name, email }: TokenGenerator.Input): Promise<TokenGenerator.Output> {
    const payload = await new jose.SignJWT({ sub, name, email })
      .setProtectedHeader({ alg: 'HS256' })
      .setIssuedAt()
      .setExpirationTime('30s')
      .sign(this.getJwtSecret())
    return { accessToken: payload }
  }

  private getJwtSecret () {
    return new TextEncoder().encode('super_secret')
  }
}