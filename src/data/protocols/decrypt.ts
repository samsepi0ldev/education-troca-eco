export interface Decrypt {
  decrypt: (plaintext: string, digest: string) => Promise<boolean>
}
