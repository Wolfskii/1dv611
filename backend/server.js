'use strict'

const express = require('express')
const bodyparser = require('body-parser')
const cors = require('cors')

const app = express()

// For setting up env variables for .env-file
require('dotenv').config()

const port = 3000 // process.env.PORT || 8080

app.use(cors())

// Bodyparser middleware for handling JSON.
app.use(bodyparser.json())

// Routes setup
app.use('/test', require('./routes/testRouter'))
app.use('/login', require('./routes/loginRouter'))
app.use('/customers', require('./routes/customersRouter'))
app.use('/invoices', require('./routes/invoicesRouter'))

// Catch 404
app.use((req, res, next) => {
  res.status(404).json({
    message: 'Page not found'
  })
})

// Error handler
app.use((err, req, res, next) => {
  res.status(err.status || 500)
  res.send(err.message || 'Internal Server Error')
})

if (process.env.NODE_ENV === 'test') {
  app.listen(port, () => {})
} else {
  app.listen(port, () => { console.log(`Server running on ${port}`) })
}

module.exports.app = app
