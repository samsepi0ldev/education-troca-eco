import bcrypt from 'bcrypt'

import { Decrypt } from '@/data/protocols'

export class BcryptAdapter implements Decrypt {
  constructor (private readonly salt?: number) {}

  async decrypt (plaintext: string, digest: string): Promise<boolean> {
    return await bcrypt.compare(plaintext, digest)
  }
}
