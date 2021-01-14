'use strict'

const fetch = require('node-fetch')
const jwt = require('jsonwebtoken')
const fs = require('fs')
const jwtSecret = fs.readFileSync('./jwtRS256.key', 'utf8')

/**
 * loginController contains the controller function for logging
 * a customer in.
*/
const loginController = {}

// The request header.
const head = {
  Authorization: process.env.TOKEN,
  'Accept-Language': 'sv-SE',
  'Content-Type': 'application/json',
  ExternalId: process.env.EXTERNAL_ID
}

/**
 * Function that send request to API to see if there is a customer
 * with the eneterd code If a customer is found a JWT is sent to
 * the client.
*/
loginController.login = async (req, res, next) => {
  const url = `${process.env.CONTRACTS_URL}/EWI/${req.body.customerCode}`

  try {
    const response = await fetch(url, {
      method: 'get',
      headers: head
    })

    const jsonData = await response.json()

    if (jsonData.Content.ContractParts.length > 0) {
      const jwtToken = jwt.sign({
        customer: {
          code: req.body.customerCode
        }
      }, jwtSecret, {
        algorithm: 'RS256',
        expiresIn: 900
      })

      res.status(200).json(
        {
          token: jwtToken,
          data: jsonData
        })
    } else {
      res.status(401).json({
        message: 'Bad credentials'
      })
    }
  } catch (error) {
    res.status(401)
  }
}

module.exports = loginController
