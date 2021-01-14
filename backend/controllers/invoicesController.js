'use strict'

const fetch = require('node-fetch')
const fs = require('fs')

/**
 * invoicesController contains the controller functions for getting a list of
 * the customer's invoices, and for opening the invoices into PDF files.
 */
const invoicesController = {}

// The request header.
const head = {
  Authorization: process.env.TOKEN,
  'Accept-Language': 'sv-SE',
  'Content-Type': 'application/json',
  ExternalId: process.env.EXTERNAL_ID
}

/**
 * The function for getting a list of the customer's invoices.
*/
invoicesController.getInvoices = async (req, res, next) => {
  const url = `${process.env.INVOICELIST_URL}/EWI/${req.customerData.customer.code}`
  try {
    const response = await fetch(url, {
      method: 'get',
      headers: head
    })

    const jsonData = await response.json()

    res.status(200).json(jsonData)
  } catch (error) {
    res.status(401)
  }
}

/**
 * The function for getting a single invoice in PDF format. Inspiration
 * has been taken from;
 * stackoverflow.com/questions/11598274/display-pdf-in-browser-using-express-js
*/
invoicesController.getInvoicePDF = async (req, res, next) => {
  head['Content-Type'] = 'application/pdf'
  const url = `${process.env.INVOICEPDF_URL}/EWI/${req.params.invoiceId}`

  try {
    const response = await fetch(url, {
      method: 'get',
      headers: head
    })
    var stream = fs.readStream(response)
    var filename = 'faktura.pdf'
    filename = encodeURIComponent(filename)
    res.setHeader('Content-disposition', 'inline; filename="' + filename + '"')
    res.setHeader('Content-type', 'application/pdf')
    stream.pipe(res)
    res.status(200)
  } catch (error) {
    res.status(401)
  }
}

module.exports = invoicesController
