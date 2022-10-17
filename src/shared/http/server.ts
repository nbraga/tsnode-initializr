import 'dotenv/config'
import express, { NextFunction, Request, Response } from 'express'
import 'express-async-errors'
import cors = require('cors')
import { routes } from './routes'
import { AppError } from './errors/AppError'

const app = express()

app.use(express.json())
app.use(cors())

app.use(routes)

//Midllewares

app.use((error: Error, req: Request, res: Response, next: NextFunction) => {
  if (error instanceof AppError) {
    return res
      .status(error.statusCode)
      .json({ status: 'error', message: error.message })
  }
  console.log(error)
  return express.response
    .status(500)
    .json({ status: 'error', message: 'Internal server error' })
})

app.listen(process.env.PORT, () => {
  console.log(`Server started on port ${process.env.PORT}!`)
})
