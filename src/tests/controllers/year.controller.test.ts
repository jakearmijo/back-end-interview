import request from "supertest";
import { app, apiVersion } from "../..";

describe("GET Year Endpoint", () => {
  it("should get year histogram", async () => {
    const res = await request(app).get(`/${apiVersion}/year/histogram`);
    expect(res.statusCode).toEqual(200);
    return;
  });
  it("should 404 if the incorrect path is used", async () => {
    const res = await request(app).get(`/${apiVersion}/year/histogram/fail`);
    expect(res.statusCode).toEqual(404);
    return;
  });
});
