import { NextApiHandler } from 'next'

import { Controller } from '@/presentation/controllers'

type Adapt = (controller: Controller) => NextApiHandler

export const adaptNextRoute: Adapt = controller => async (req, res) => {
  const { data, statusCode } = await controller.handle({
    ...req.body
  })
  const json = [200, 201, 204].includes(statusCode) ? data : { error: data.message }
  res.status(statusCode).json(json)
}
