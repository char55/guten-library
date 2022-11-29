'use strict'

const express = require('express')
const cors = require('cors')
const helmet = require('helmet')
const routes = require('../routes')
const endpoints = require('../constants/endpoints')
const { IS_DEV } = require('../constants/const')

const app = express()

// Enables CORS
app.use(cors())

// help protect your app from well-known web vulnerabilities
app.use(helmet())

// Adds logger request information to each API call
app.use((req, res, next) => {
  if (!!IS_DEV) {
    console.log(
      JSON.stringify({
        method: req.method,
        url: req.url
      })
    )
  }
  next()
})

// Sets API root path and includes all routes
app.use(endpoints.CONFIG.ROOT, routes)

module.exports = app
