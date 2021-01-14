'use strict'

const express = require('express')
const router = express.Router()
const checkJWT = require('../middleware/checkJWT')
const controller = require('../controllers/customersController')

/**
 * Routes for getting the page with the customer's profile information,
 * and for updating the customer's profile information.
*/
router.get('/', checkJWT, controller.getCustomer)
router.put('/', checkJWT, controller.updateCustomer)

module.exports = router
