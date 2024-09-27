"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.registerCommodityPaths = void 0;
const commodity_schema_1 = require("../../schemas/commodity.schema");
const registerCommodityPaths = (registry) => {
    registry.registerPath({
        method: "get",
        path: "/commodity/histogram",
        description: "Get commodity histogram",
        responses: {
            200: {
                description: "A histogram of commodity data",
                content: {
                    "application/json": {
                        schema: commodity_schema_1.CommodityHistogramResponseSchema,
                    },
                },
            },
        },
    });
};
exports.registerCommodityPaths = registerCommodityPaths;
