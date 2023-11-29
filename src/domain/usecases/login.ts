import { LoginUser } from '@/domain/entities'

export interface Login {
  login: (input: Login.Input) => Promise<Login.Output>
}

export namespace Login {
  export type Input = {
    email: string
    password: string
  }
  export type Output = LoginUser
}