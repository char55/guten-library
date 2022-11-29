'use strict'

const express = require('express')

const gutendexRouter = require('./gutendex.route')

const endpoints = require('../constants/endpoints')

const router = express.Router()

router.use(endpoints.GUTENDEX.ROOT, gutendexRouter)

module.exports = router
