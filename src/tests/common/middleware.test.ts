import request from "supertest";
import { app } from "../..";

describe("Rate limiter tests", () => {
  it("should return 429 Too Many Requests after 5 requests in quick succession", async () => {
    const maxRequests = 5;
    const route = "/units/histogram";

    for (let i = 0; i < maxRequests; i++) {
      const res = await request(app).get(route);
      expect(res.statusCode).toBe(200);
    }

    const res = await request(app).get(route);
    expect(res.statusCode).toBe(429);
    expect(res.text).toBe("Too many requests, please try again later.");
  });
});
