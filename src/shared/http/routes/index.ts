//import { AppError } from '../errors/AppError'
import { Router } from 'express'
import { rolesRouter } from '@roles/http/routes/roles.routes'

const routes = Router()

routes.get('/', (req, res) => {
  //throw new AppError('Acesso negado', 401)

  return res.json({ message: 'Olá Dev!' })
})

routes.use('/roles', rolesRouter)

export { routes }
