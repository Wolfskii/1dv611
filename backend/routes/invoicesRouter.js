'use strict'

const express = require('express')
const router = express.Router()
const checkJWT = require('../middleware/checkJWT')
const controller = require('../controllers/invoicesController')

/**
 * Routes for getting the page with the list of the customer's
 * all invoices, and for getting a single invoice in PDF-format.
 */
router.get('/', checkJWT, controller.getInvoices)
router.get('/:invoiceId', checkJWT, controller.getInvoicePDF)

module.exports = router
