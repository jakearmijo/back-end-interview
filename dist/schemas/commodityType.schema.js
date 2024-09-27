"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CommodityTypeHistogramResponseSchema = void 0;
const zod_to_openapi_1 = require("@asteasolutions/zod-to-openapi");
const zod_1 = require("zod");
(0, zod_to_openapi_1.extendZodWithOpenApi)(zod_1.z);
exports.CommodityTypeHistogramResponseSchema = zod_1.z.object({
    Crops: zod_1.z.number().openapi({ description: "Amount of Crops" }),
    "Livestock/Dairy": zod_1.z.number().openapi({ description: "Amount of Livestock/Dairy" }),
}).openapi({
    title: "Commodity Type Histogram Response",
    description: "A histogram of commodity type data",
});
