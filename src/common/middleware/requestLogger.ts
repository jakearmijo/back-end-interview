import { randomUUID } from "crypto";
import { IncomingMessage, ServerResponse } from "http";
import { StatusCodes } from "http-status-codes";
import { Options, pinoHttp } from "pino-http";
import pino from 'pino';

enum LogLevel {
  Error = "error",
  Warn = "warn",
  Info = "info",
}

const logger = pino({
  transport: {
    target:'pino-pretty',
    options: {
      colorize: true,
      ignore: "pid,hostname,req,res",
    },
  },
});

const requestLogger = (): Array<
  (req: IncomingMessage, res: ServerResponse) => void
> => {
  const pinoOptions: Options = {
    enabled: true,
    genReqId,
    customLogLevel,
    customSuccessMessage: (req) =>
      `🟢 🟢 ${req.method} ${req.url} completed successfully`,
    customErrorMessage: (req, res, err) =>
      `🔴 🔴 ${req.method} ${req.url} failed with status ${res.statusCode}: ${err.message}`,
  };

  return [
    pinoHttp({
      logger,
      ...pinoOptions,
    }),
  ];
};

const customLogLevel = (
  _req: IncomingMessage,
  res: ServerResponse,
  err?: Error
): LogLevel => {
  if (err || res.statusCode >= StatusCodes.INTERNAL_SERVER_ERROR) return LogLevel.Error;
  if (res.statusCode >= StatusCodes.BAD_REQUEST) return LogLevel.Warn;
  return LogLevel.Info;
};

const genReqId = (req: IncomingMessage, res: ServerResponse): string => {
  const existingID = req.headers["x-request-id"] as string;
  if (existingID) return existingID;
  const id = randomUUID();
  res.setHeader("X-Request-Id", id);
  return id;
};

export default requestLogger();
