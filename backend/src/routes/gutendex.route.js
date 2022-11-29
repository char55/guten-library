'use strict'

const express = require('express')
const endpoints = require('../constants/endpoints')
const controllers = require('../controllers/index.controller')

const router = express.Router()

router.get(endpoints.GUTENDEX.GET, controllers.gutendex.getBookSearch)

module.exports = router
