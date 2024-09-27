import request from 'supertest';
import { app } from '../..';

describe('GET Attribute Endpoint', () => {
  it('should get attribute histogram', async () => {
    const res = await request(app)
    .get('/attribute/histogram')
    expect(res.statusCode).toEqual(200)
    return
  })
})
