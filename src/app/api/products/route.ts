import { makeListProductsController } from '@/main/factories/controllers'
import { NextResponse } from 'next/server'

export async function GET () {
  const controller = makeListProductsController()
  const { data, statusCode } = await controller.handle({})
  const json = [200, 201, 204].includes(statusCode) ? data : { error: data.message }
  
  return NextResponse.json(json, {
    status: statusCode
  })
}