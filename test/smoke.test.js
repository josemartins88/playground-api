const request = require('supertest')
const app = require('../app')


describe('get endpoint', () => {
  it('should return 200 on initial endpoint', async () => {
    const res = await request(app).get('/')
    expect(res.statusCode).toEqual(200)
  })
})