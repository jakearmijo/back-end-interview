import request from 'supertest';
import { app } from '../..';

describe('GET YearType Endpoint', () => {
  it('should get yearType histogram', async () => {
    const res = await request(app)
    .get('/yearType/histogram')
    expect(res.statusCode).toEqual(200)
    return
  })
  it('should 404 if the incorrect path is used', async () => {
    const res = await request(app)
    .get('/yearType/histogram/fail')
    expect(res.statusCode).toEqual(404)
    return
  })
})
