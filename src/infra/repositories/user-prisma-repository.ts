import { FindUserByEmail } from '@/data/protocols'
import { prisma } from '@/infra/repositories/prisma'


export class UserPrismaRepository implements FindUserByEmail {
  async findByEmail (email: string): Promise<FindUserByEmail.Output> {
    const user = await prisma.user.findUniqueOrThrow({
      where: { email  }
    })
    return user
  }
}
