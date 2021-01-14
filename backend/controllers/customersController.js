'use strict'

const fetch = require('node-fetch')

/**
 * customersController contains the controller functions for getting a customer's
 * profiledata, and for updating a customer's profiledata.
 *
*/
const customersController = {}

// The request header.
const head = {
  Authorization: process.env.TOKEN,
  'Accept-Language': 'sv-SE',
  'Content-Type': 'application/json'
}

/**
 * The function for getting a customer's profiledata.
*/
customersController.getCustomer = async (req, res, next) => {
  const customerCode = First
  const url = `${process.env.CUSTOMERPROFILE_URL}/EWI/${customerCode}`

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
 * The function for updating a customer's profiledata. Sends a request to
 * the API with an object with the customer's profiledata.
*/
customersController.updateCustomer = async (req, res, next) => {
  const customerCode = req.customerData.customer.code
  const url = `${process.env.CUSTOMERPROFILE_SAVE_URL}`

  head.Operation = 'Update'

  const body = {
    Header: {
      ExternalId: process.env.EXTERNAL_ID,
      Operation: 'Save'
    },
    Customer: {
      CustomerCode: customerCode,
      FirstName: req.body.Content.Customer.FirstName,
      LastName: req.body.Content.Customer.LastName,
      PostStreetName: req.body.Content.Customer.PostStreetName,
      PostStreetQualifier: req.body.Content.Customer.PostStreetQualifier,
      PostStreetNumberSuffix: req.body.Content.Customer.PostStreetNumberSuffix,
      PostApartmentNumber: req.body.Content.Customer.PostApartmentNumber,
      PostFloorNumber: req.body.Content.Customer.PostFloorNumber,
      PostZipCode: req.body.Content.Customer.PostZipCode,
      PostCity: req.body.Content.Customer.PostCity,
      PostCountryName: req.body.Content.Customer.PostCountryName,
      InvoiceStreetName: req.body.Content.Customer.InvoiceStreetName,
      InvoiceStreetQualifier: req.body.Content.Customer.InvoiceStreetQualifier,
      InvoiceStreetNumberSuffix: req.body.Content.Customer.InvoiceStreetNumberSuffix,
      InvoiceApartmentNumber: req.body.Content.Customer.InvoiceApartmentNumber,
      InvoiceFloorNumber: req.body.Content.Customer.InvoiceFloorNumber,
      InvoiceZipCode: req.body.Content.Customer.InvoiceZipCode,
      InvoiceCity: req.body.Content.Customer.InvoiceCity,
      InvoiceCountryName: req.body.Content.Customer.InvoiceCountryName,
      AcceptsEmail: req.body.Content.Customer.AcceptsEmail,
      AcceptsSMS: req.body.Content.Customer.AcceptsSMS,
      MarketingBan: req.body.Content.Customer.MarketingBan,
      InformationBan: req.body.Content.Customer.InformationBan,
      HomePhoneNumber: req.body.Content.Customer.HomePhoneNumber,
      BusinessPhoneNumber: req.body.Content.Customer.BusinessPhoneNumber,
      MobilePhoneNumber: req.body.Content.Customer.MobilePhoneNumber,
      Email1: req.body.Content.Customer.Email1,
      Email2: req.body.Content.Customer.Email2,
      Email3: req.body.Content.Customer.Email3
    }
  }

  try {
    const response = await fetch(url, {
      method: 'post',
      headers: head,
      body: JSON.stringify(body)
    })

    const jsonData = await response.json()

    res.status(200).json(jsonData)
  } catch (err) {
    res.json({ message: err })
  }
}

module.exports = customersController
