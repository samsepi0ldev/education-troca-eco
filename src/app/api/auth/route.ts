import { NextRequest, NextResponse } from 'next/server';

import { makeLoginController } from '@/main/factories/controllers'

export async function POST (req: NextRequest) {
  const body = await req.json()
  const controller = makeLoginController()
  const { data, statusCode } = await controller.handle({ ...body })
  const json = [200, 201, 204].includes(statusCode) ? data : { error: data.message }
  
  return NextResponse.json(json, {
    status: statusCode
  })
}