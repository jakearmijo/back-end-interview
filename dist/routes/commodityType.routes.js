"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.commodityTypeRegistry = void 0;
const express_1 = require("express");
const zod_to_openapi_1 = require("@asteasolutions/zod-to-openapi");
const commodityType_schema_1 = require("../schemas/commodityType.schema");
const responseBuilder_1 = require("../openapi/responseBuilder");
const commodityType_controller_1 = require("../controllers/commodityType.controller");
exports.commodityTypeRegistry = new zod_to_openapi_1.OpenAPIRegistry();
const commodityTypeRouter = (0, express_1.Router)();
exports.commodityTypeRegistry.register("Commodity Type", commodityType_schema_1.CommodityTypeHistogramResponseSchema);
exports.commodityTypeRegistry.registerPath({
    method: "get",
    path: "/commodityType/histogram",
    tags: ["Commodity Type"],
    responses: (0, responseBuilder_1.createApiResponse)(commodityType_schema_1.CommodityTypeHistogramResponseSchema, "Success"),
});
commodityTypeRouter.get("/histogram", commodityType_controller_1.getCommodityTypeHistogram);
exports.default = commodityTypeRouter;
