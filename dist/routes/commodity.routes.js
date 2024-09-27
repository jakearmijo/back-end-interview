"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.commodityRegistry = void 0;
const express_1 = require("express");
const zod_to_openapi_1 = require("@asteasolutions/zod-to-openapi");
const commodity_controller_1 = require("../controllers/commodity.controller");
const commodity_schema_1 = require("../schemas/commodity.schema");
const responseBuilder_1 = require("../openapi/responseBuilder");
exports.commodityRegistry = new zod_to_openapi_1.OpenAPIRegistry();
const commodityRouter = (0, express_1.Router)();
exports.commodityRegistry.register("Commodity", commodity_schema_1.CommodityHistogramResponseSchema);
exports.commodityRegistry.registerPath({
    method: "get",
    path: "/commodity/histogram",
    tags: ["Commodity"],
    responses: (0, responseBuilder_1.createApiResponse)(commodity_schema_1.CommodityHistogramResponseSchema, "Success"),
});
commodityRouter.get("/histogram", commodity_controller_1.getCommodityHistogram);
exports.default = commodityRouter;
