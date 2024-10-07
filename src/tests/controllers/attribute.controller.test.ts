import request from "supertest";
import { app, apiVersion } from "../..";

describe("GET Attribute Endpoint", () => {
  it("should get attribute histogram", async () => {
    const res = await request(app).get(`/${apiVersion}/attribute/histogram`);
    expect(res.statusCode).toEqual(200);
    return;
  });
  it("should 404 if the incorrect path is used", async () => {
    const res = await request(app).get(
      `/${apiVersion}/attribute/histogram/fail`
    );
    expect(res.statusCode).toEqual(404);
    return;
  });
});
