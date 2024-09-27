"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const zod_to_openapi_1 = require("@asteasolutions/zod-to-openapi");
const commodity_path_1 = require("./paths/commodity.path");
const registry = new zod_to_openapi_1.OpenAPIRegistry();
(0, commodity_path_1.registerCommodityPaths)(registry);
const generator = new zod_to_openapi_1.OpenApiGeneratorV3(registry.definitions);
const openApiSpec = generator.generateDocument({
    openapi: "3.0.0",
    info: {
        title: "Nutrien AG Solutions Back-end Developer Interview",
        version: "1.0.0",
        description: "API documentation",
    },
    servers: [
        {
            url: "http://localhost:3000",
        },
    ],
});
