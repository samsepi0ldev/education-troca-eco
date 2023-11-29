export interface TokenGenerator {
  generate: (input: TokenGenerator.Input) => Promise<TokenGenerator.Output>
}

export namespace TokenGenerator {
  export type Input = {
    sub?: string
    name?: string
    email?: string
  }
  export type Output = {
    accessToken: string
  }
}
