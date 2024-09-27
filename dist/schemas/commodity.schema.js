"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CommodityHistogramResponseSchema = void 0;
const zod_to_openapi_1 = require("@asteasolutions/zod-to-openapi");
const zod_1 = require("zod");
(0, zod_to_openapi_1.extendZodWithOpenApi)(zod_1.z);
exports.CommodityHistogramResponseSchema = zod_1.z.object({
    Rice: zod_1.z.number().openapi({ description: "Amount of Rice" }),
    Barley: zod_1.z.number().openapi({ description: "Amount of Barley" }),
    Corn: zod_1.z.number().openapi({ description: "Amount of Corn" }),
    "Upland Cotton": zod_1.z.number().openapi({ description: "Amount of Upland Cotton" }),
    Oats: zod_1.z.number().openapi({ description: "Amount of Oats" }),
    Sorghum: zod_1.z.number().openapi({ description: "Amount of Sorghum" }),
    Soybeans: zod_1.z.number().openapi({ description: "Amount of Soybeans" }),
    Wheat: zod_1.z.number().openapi({ description: "Amount of Wheat" }),
    Egg: zod_1.z.number().openapi({ description: "Amount of Egg" }),
    "Per capita meat consumption, retail weight": zod_1.z.number().openapi({ description: "Meat consumption per capita" }),
    Beef: zod_1.z.number().openapi({ description: "Amount of Beef" }),
    Pork: zod_1.z.number().openapi({ description: "Amount of Pork" }),
    Dairy: zod_1.z.number().openapi({ description: "Amount of Dairy" }),
    Chicken: zod_1.z.number().openapi({ description: "Amount of Chicken" }),
    Turkey: zod_1.z.number().openapi({ description: "Amount of Turkey" }),
    "Soybean oil": zod_1.z.number().openapi({ description: "Amount of Soybean oil" }),
    "Soybean meal": zod_1.z.number().openapi({ description: "Amount of Soybean meal" }),
}).openapi({
    title: "Commodity Histogram Response",
    description: "A histogram of commodity data",
});
