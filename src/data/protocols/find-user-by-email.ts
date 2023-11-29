import { User } from '@/domain/entities'

export interface FindUserByEmail {
  findByEmail: (email: string) => Promise<FindUserByEmail.Output>
}

export namespace FindUserByEmail {
  export type Output = User
}
