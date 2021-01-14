'use strict'

const fs = require('fs')
const jwt = require('jsonwebtoken')
const publicKey = fs.readFileSync('./jwtRS256.key.pub')

/**
 * Function for getting the JWT from the
 * Authorization header, decode, verify it and
 * put it on the request object.
*/
module.exports = (req, res, next) => {
  try {
    if (req.headers.authorization) {
      const token = req.headers.authorization.split(' ')[1]
      const decodedToken = jwt.verify(token, publicKey)

      req.customerData = decodedToken

      next()
    } else {
      throw new Error('Authorization header missing')
    }
  } catch (error) {
    res.sendStatus(403).json({
      message: 'Need to login to access.'
    })
  }
}
