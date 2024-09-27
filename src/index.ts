import express, { Request, Response } from "express";
import cors from "cors";
import helmet from "helmet";
import pino from "pino";
import requestLogger from "./common/middleware/requestLogger";
import attributeRouter from "./routes/attribute.routes";
import commodityRouter from "./routes/commodity.routes";
import commodityTypeRouter from "./routes/commodityType.routes";
import unitsRouter from "./routes/units.routes";
import yearTypeRouter from "./routes/yearType.routes";
import yearRouter from "./routes/year.routes";
import openApiRouter from "./routes/openApi.routes";
import { createClient } from 'redis';

const client = createClient({
    password: process.env.REDIS_PASSWORD,
    socket: {
        host: process.env.REDIS_HOST,
        port: 12634
    }
});
const logger = pino({
  transport: {
    target: "pino-pretty",
    options: {
      colorize: true,
      translateTime: "SYS:standard",
      ignore: "pid,hostname,req,res",
    },
  },
});

const app = express();
const port = 3000;

app.use(requestLogger);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use(helmet());

app.use("/attribute", attributeRouter);
app.use("/commodity", commodityRouter);
app.use("/commodityType", commodityTypeRouter);
app.use("/units", unitsRouter);
app.use("/yearType", yearTypeRouter);
app.use("/year", yearRouter);
app.use("/docs", openApiRouter);

app.get("/", (req: Request, res: Response) => {
  res.send("Hello, 🌿 Nutrien AG Solutions!");
});

app.listen(port, () => {
  logger.info(
    `🚜 🚜 🚜 Hello, 🌿 Nutrien AG Solutions from http://localhost:${port}`
  );
});

export { logger };
