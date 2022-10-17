import 'dotenv/config'
import express = require('express')
import 'express-async-errors'
import cors = require('cors')
import { routes } from './routes'

const app = express()

app.use(express.json())
app.use(cors())

app.use(routes)

app.listen(process.env.PORT, () => {
  console.log(`Server started on port ${process.env.PORT}!`)
})
