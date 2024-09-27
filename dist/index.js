"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.logger = void 0;
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const helmet_1 = __importDefault(require("helmet"));
const pino_1 = __importDefault(require("pino"));
const requestLogger_1 = __importDefault(require("./common/middleware/requestLogger"));
const attribute_routes_1 = __importDefault(require("./routes/attribute.routes"));
const commodity_routes_1 = __importDefault(require("./routes/commodity.routes"));
const commodityType_routes_1 = __importDefault(require("./routes/commodityType.routes"));
const units_routes_1 = __importDefault(require("./routes/units.routes"));
const yearType_routes_1 = __importDefault(require("./routes/yearType.routes"));
const year_routes_1 = __importDefault(require("./routes/year.routes"));
const openApi_routes_1 = __importDefault(require("./routes/openApi.routes"));
const redis_1 = require("redis");
const client = (0, redis_1.createClient)({
    password: process.env.REDIS_PASSWORD,
    socket: {
        host: process.env.REDIS_HOST,
        port: 12634
    }
});
const logger = (0, pino_1.default)({
    transport: {
        target: "pino-pretty",
        options: {
            colorize: true,
            translateTime: "SYS:standard",
            ignore: "pid,hostname,req,res",
        },
    },
});
exports.logger = logger;
const app = (0, express_1.default)();
const port = 3000;
app.use(requestLogger_1.default);
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: true }));
app.use((0, cors_1.default)());
app.use((0, helmet_1.default)());
app.use("/attribute", attribute_routes_1.default);
app.use("/commodity", commodity_routes_1.default);
app.use("/commodityType", commodityType_routes_1.default);
app.use("/units", units_routes_1.default);
app.use("/yearType", yearType_routes_1.default);
app.use("/year", year_routes_1.default);
app.use("/docs", openApi_routes_1.default);
app.get("/", (req, res) => {
    res.send("Hello, 🌿 Nutrien AG Solutions!");
});
app.listen(port, () => {
    logger.info(`🚜 🚜 🚜 Hello, 🌿 Nutrien AG Solutions from http://localhost:${port}`);
});
