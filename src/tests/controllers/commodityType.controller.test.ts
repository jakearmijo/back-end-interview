import request from 'supertest';
import { app, apiVersion } from "../..";

describe('GET CommodityType Endpoint', () => {
  it('should get commodityType histogram', async () => {
    const res = await request(app)
    .get(`/${apiVersion}/commodityType/histogram`)
    expect(res.statusCode).toEqual(200)
    return
  })
  it('should 404 if the incorrect path is used', async () => {
    const res = await request(app)
    .get(`/${apiVersion}/commodityType/histogram/fail`)
    expect(res.statusCode).toEqual(404)
    return
  })
})
