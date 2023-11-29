export class UnauthorizedError extends Error {
  constructor (message?: string) {
    super(message ?? 'Oops! Looks like you took a wrong turn. Unauthorized access: Denied! Are you sure you\'re not a cat walking on a keyboard?')
    this.name = 'UnauthorizedError'
  }
}