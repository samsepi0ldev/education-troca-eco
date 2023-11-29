import { DbLogin } from '@/data/usecases'
import { JwtAdapter } from '@/infra/cryptography'
import { BcryptAdapter } from '@/infra/cryptography/bcrypt-adapter'
import { UserPrismaRepository } from '@/infra/repositories'

export const makeDbLogin = (): DbLogin => {
  const userRepo = new UserPrismaRepository()
  const bcryptAdapter = new BcryptAdapter()
  const jwtAdapter = new JwtAdapter()
  return new DbLogin(userRepo, bcryptAdapter, jwtAdapter)
}