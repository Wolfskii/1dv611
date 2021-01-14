const request = require('supertest')
process.env.NODE_ENV = 'test'
const app = require('../server').app

const testCustomerCode = '4411' // TODO: Set in env-variable
let invoicesData = null

describe('Invoices-route without authentication', () => {
  it('Should return status code 403', (done) => {
    request(app).get('/invoices')
      .expect(403)
      .end(done)
  })

  it('Should return error message', (done) => {
    request(app).get('/invoices')
      .expect('Forbidden')
      .end(done)
  })
})

describe('Invoices-route with authentication', () => {
  let token = null

  before((done) => {
    request(app).post('/login')
      .send({ customerCode: testCustomerCode })
      .end((err, res) => {
        token = res.body.token
        done()
      })
  })

  it('Should return status code 200 on retrieval of invoices', (done) => {
    request(app).get('/invoices')
      .set('Authorization', 'Bearer ' + token)
      .expect(200)
      .end(done)
  })

  it('Should return invoices as JSON', (done) => {
    request(app).get('/invoices')
      .set('Authorization', 'Bearer ' + token)
      .expect('Content-Type', /json/)
      .end(done)
  })

  it('Should return invoices', (done) => {
    request(app).get('/invoices')
    .set('Authorization', 'Bearer ' + token)
    .expect(
      'FirstName',
      'LastName',
      'PostStreetName',
      'PostStreetNumberSuffix',
      'PostZipCode',
      'PostCity',
      'PostCountryName',
      'Email1'
      )
    .end((err, res) => {
      invoicesData = res.body
      done()
    })
  })

/*   it('Should return specific invoice', (done) => {
    const invoiceId = invoicesData.Content.InvoiceParts[0].InvoiceId

    request(app).get('/invoices/' + invoiceId)
    .set('Authorization', 'Bearer ' + token)
    .expect(200)
    .expect('Content-Type', 'application/pdf')
    .end(done)
  }) */
})
