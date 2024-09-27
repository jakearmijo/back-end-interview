"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const crypto_1 = require("crypto");
const http_status_codes_1 = require("http-status-codes");
const pino_http_1 = require("pino-http");
const pino_1 = __importDefault(require("pino"));
var LogLevel;
(function (LogLevel) {
    LogLevel["Error"] = "error";
    LogLevel["Warn"] = "warn";
    LogLevel["Info"] = "info";
})(LogLevel || (LogLevel = {}));
const logger = (0, pino_1.default)({
    transport: {
        target: 'pino-pretty',
        options: {
            colorize: true,
            ignore: "pid,hostname,req,res",
        },
    },
});
const requestLogger = () => {
    const pinoOptions = {
        enabled: true,
        genReqId,
        customLogLevel,
        customSuccessMessage: (req) => `🟢 🟢 ${req.method} ${req.url} completed successfully`,
        customErrorMessage: (req, res, err) => `🔴 🔴 ${req.method} ${req.url} failed with status ${res.statusCode}: ${err.message}`,
    };
    return [
        (0, pino_http_1.pinoHttp)(Object.assign({ logger }, pinoOptions)),
    ];
};
const customLogLevel = (_req, res, err) => {
    if (err || res.statusCode >= http_status_codes_1.StatusCodes.INTERNAL_SERVER_ERROR)
        return LogLevel.Error;
    if (res.statusCode >= http_status_codes_1.StatusCodes.BAD_REQUEST)
        return LogLevel.Warn;
    return LogLevel.Info;
};
const genReqId = (req, res) => {
    const existingID = req.headers["x-request-id"];
    if (existingID)
        return existingID;
    const id = (0, crypto_1.randomUUID)();
    res.setHeader("X-Request-Id", id);
    return id;
};
exports.default = requestLogger();
