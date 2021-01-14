const request = require('supertest')
process.env.NODE_ENV = 'test'
const app = require('../server').app

const testCustomerCode = '4411' // TODO: Set in env-variable
const incorrectCustomerCode = '123456789'

describe('Login-route with bad credentials', () => {
  it('Should return status code 401', (done) => {
    request(app).post('/login')
      .send({ customerCode: incorrectCustomerCode })
      .expect(401)
      .end(done)
  })

  it('Should return error message', (done) => {
    request(app).post('/login')
      .send({ customerCode: incorrectCustomerCode })
      .expect({ message: 'Bad credentials' })
      .end(done)
  })
})

describe('Login-route with correct credentials', () => {
  it('Should return status code 200', (done) => {
    request(app).post('/login')
      .send({ customerCode: testCustomerCode })
      .expect(200)
      .end(done)
  })

  it('Should return token and data keys', (done) => {
    request(app).post('/login')
      .send({ customerCode: testCustomerCode })
      .expect((res) => {
        if(!('token' in res.body)) throw new Error('Missing token key')
        if(!('data' in res.body)) throw new Error('Missing data key')
      })
      .end(done)
  })
})
