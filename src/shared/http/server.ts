import express = require('express')
import 'express-async-errors'
import cors = require('cors')

const app = express()

app.use(express.json())
app.use(cors())

app.get('/', (req, res) => {
  return res.json({ message: 'Olá Dev!' })
})

app.listen(3333, () => {
  console.log('Server started on port 3333')
})
