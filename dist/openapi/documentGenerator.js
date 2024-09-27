"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateOpenAPIDocument = generateOpenAPIDocument;
const zod_to_openapi_1 = require("@asteasolutions/zod-to-openapi");
const commodity_routes_1 = require("../routes/commodity.routes");
function generateOpenAPIDocument() {
    const registry = new zod_to_openapi_1.OpenAPIRegistry([commodity_routes_1.commodityRegistry]);
    const generator = new zod_to_openapi_1.OpenApiGeneratorV3(registry.definitions);
    return generator.generateDocument({
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
}
