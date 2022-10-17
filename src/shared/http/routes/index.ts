import { AppError } from '../errors/AppError'
import { Router } from 'express'

const routes = Router()

routes.get('/', (req, res) => {
  throw new AppError('Acesso negado', 401)

  return res.json({ message: 'Olá Dev!' })
})

export { routes }
