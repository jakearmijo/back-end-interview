import express, { Request, Response } from "express";
import cors from "cors";
import helmet from "helmet";
import pino from "pino";
import requestLogger from "./common/middleware/requestLogger";
import rateLimiter from "./common/middleware/rateLimiter";
import attributeRouter from "./routes/attribute.routes";
import commodityRouter from "./routes/commodity.routes";
import commodityTypeRouter from "./routes/commodityType.routes";
import unitsRouter from "./routes/units.routes";
import yearTypeRouter from "./routes/yearType.routes";
import yearRouter from "./routes/year.routes";
import openApiRouter from "./routes/openApi.routes";
// import { createClient } from "redis";
import dotenv from "dotenv";
dotenv.config();

// export const redisClient = createClient({
//   password: process.env.REDIS_PASSWORD,
//   socket: { host: process.env.REDIS_HOST, port: 12634 },
// });

export const logger = pino({
  transport: {
    target: "pino-pretty",
    options: {
      colorize: true,
      translateTime: "SYS:standard",
      ignore: "pid,hostname,req,res",
    },
  },
});

export const app = express();
const apiVersion = "v1";

app.use(requestLogger);
app.use(rateLimiter);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use(helmet());

app.use(`/${apiVersion}/attribute`, attributeRouter);
app.use(`/${apiVersion}/commodity`, commodityRouter);
app.use(`/${apiVersion}/commodityType`, commodityTypeRouter);
app.use(`/${apiVersion}/units`, unitsRouter);
app.use(`/${apiVersion}/yearType`, yearTypeRouter);
app.use(`/${apiVersion}/year`, yearRouter);
app.use(`/${apiVersion}/docs`, openApiRouter);

app.get(`/${apiVersion}/`, (req: Request, res: Response) => {
  res.send("Hello, 🌿 Nutrien AG Solutions!");
});
if (process.env.NODE_ENV !== "test") {
  const port = process.env.PORT || 3000;
  app.listen(port, () => {
    logger.info(
      `🚜 🚜 🚜 Hello, 🌿 Nutrien AG Solutions from http://localhost:${port}`
    );
  });

  // (async () => {
  //   try {
  //     await redisClient.connect();
  //     redisClient.on("error", (err) => console.log("Redis Client Error", err));
  //     logger.info("💾 💾 Redis Connect successfully");
  //   } catch (error: any) {
  //     logger.info(`🔴 Unable to connect to Redis: ${error}`);
  //   }
  // })();
}
