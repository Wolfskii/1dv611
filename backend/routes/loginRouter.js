'use strict'

const express = require('express')
const router = express.Router()
const controller = require('../controllers/loginController')

/**
 * Route for logging a customer in.
*/
router.post('/', controller.login)

module.exports = router
