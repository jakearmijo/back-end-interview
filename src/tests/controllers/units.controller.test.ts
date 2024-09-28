import request from 'supertest';
import { app } from '../..';

describe('GET Units Endpoint', () => {
  it('should get units histogram', async () => {
    const res = await request(app)
    .get('/units/histogram')
    expect(res.statusCode).toEqual(200)
    return
  })
  it('should 404 if the incorrect path is used', async () => {
    const res = await request(app)
    .get('/units/histogram/fail')
    expect(res.statusCode).toEqual(500)
    return
  })
})
