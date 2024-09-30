import { Request } from "express";
import { rateLimit } from "express-rate-limit";

const rateLimiter = rateLimit({
  legacyHeaders: true,
  limit: 5,
  message: "Too many requests, please try again later.",
  standardHeaders: true,
  windowMs: 10000,
  keyGenerator: (req: Request) => req.ip as string,
});

export default rateLimiter;
