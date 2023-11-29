export class ServerError extends Error {
  constructor (error?: Error) {
    const message = error ? error.message : 'Server fails, try again soon'
    super(message)
    this.name = 'ServerError'
    this.stack = error?.stack
  }
}
