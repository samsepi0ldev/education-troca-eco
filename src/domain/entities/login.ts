import { User } from '@/domain/entities'

export interface LoginUser {
  user: Omit<User, 'password'>,
  accessToken: string
  refreshToken: string
}