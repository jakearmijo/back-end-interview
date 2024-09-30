import request from 'supertest';
import { app } from '../..';

describe('GET Commodity Endpoint', () => {
  it('should get commodity histogram', async () => {
    const res = await request(app)
    .get('/commodity/histogram')
    expect(res.statusCode).toEqual(200)
    return
  })
  it('should 404 if the incorrect path is used', async () => {
    const res = await request(app)
    .get('/commodity/histogram/fail')
    expect(res.statusCode).toEqual(404)
    return
  })
})
