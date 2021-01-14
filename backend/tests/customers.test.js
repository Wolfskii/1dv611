const request = require('supertest')
process.env.NODE_ENV = 'test'
const app = require('../server').app

const testCustomerCode = '4411' // TODO: Set in env-variable
let userData = null

describe('Customer-route without authentication', () => {
  it('Should return status code 403', (done) => {
    request(app).get('/customers')
      .expect(403)
      .end(done)
  })

  it('Should return error message', (done) => {
    request(app).get('/customers')
      .expect('Forbidden')
      .end(done)
  })
})

describe('Customer-route with authentication', () => {
  let token = null

  before((done) => {
    request(app).post('/login')
      .send({ customerCode: testCustomerCode })
      .end((err, res) => {
        token = res.body.token
        done()
      })
  })

  it('Should return status code 200 on retrieval of user data', (done) => {
    request(app).get('/customers')
      .set('Authorization', 'Bearer ' + token)
      .expect(200)
      .end(done)
  })

  it('Should return user data as JSON', (done) => {
    request(app).get('/customers')
      .set('Authorization', 'Bearer ' + token)
      .expect('Content-Type', /json/)
      .end(done)
  })

  it('Should return user data', (done) => {
    request(app).get('/customers')
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
      userData = res.body
      done()
    })
  })

  it('Should change email-adress', (done) => {
    userData.Email1 = 'changed.adress@email.com'

    request(app).put('/customers')
    .send(userData)
    .set('Authorization', 'Bearer ' + token)
    .expect(200)
    .expect('Content-Type', /json/)
    .end(done)
  })
})
