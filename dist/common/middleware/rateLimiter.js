"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_rate_limit_1 = require("express-rate-limit");
const rateLimiter = (0, express_rate_limit_1.rateLimit)({
    legacyHeaders: true,
    limit: 20,
    message: "Too many requests, please try again later.",
    standardHeaders: true,
    windowMs: 15 * 60 * 1000,
    keyGenerator: (req) => req.ip,
});
exports.default = rateLimiter;
