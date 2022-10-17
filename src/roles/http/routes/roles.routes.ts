import { Role } from '@roles/entities/Role'
import { Router } from 'express'

const rolesRouter = Router()

const roles: Role[] = []

rolesRouter.post('/', (req, res) => {
  const { name } = req.body
  const role = new Role()

  Object.assign(role, {
    name,
    created_at: new Date(),
  })

  roles.push(role)

  return res.status(201).json(role)
})

export { rolesRouter }
