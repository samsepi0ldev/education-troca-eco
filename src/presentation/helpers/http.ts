import { HttpResponse } from '@/presentation/protocols'
import { ServerError } from '@/presentation/errors'

export enum HttpStatusCode {
  Ok = 200,
  Created = 201,
  NoContent = 204,
  BadRequest = 400,
  Unauthorized = 401,
  Forbidden = 403,
  ServerError = 500
}

export const serverError = (error?: unknown): HttpResponse => ({
  statusCode: HttpStatusCode.ServerError,
  data: new ServerError(error instanceof Error ? error : undefined)
})

export const ok = (data: any): HttpResponse => ({
  data,
  statusCode: HttpStatusCode.Ok
})

export const badRequest = (data: Error): HttpResponse => ({
  data,
  statusCode: HttpStatusCode.BadRequest
})
