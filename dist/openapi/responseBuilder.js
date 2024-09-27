"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createApiResponse = createApiResponse;
const http_status_codes_1 = require("http-status-codes");
const serverResponse_schema_1 = require("../schemas/serverResponse.schema");
function createApiResponse(schema, description, statusCode = http_status_codes_1.StatusCodes.OK) {
    return {
        [statusCode]: {
            description,
            content: {
                "application/json": {
                    schema: (0, serverResponse_schema_1.ServiceResponseSchema)(schema),
                },
            },
        },
    };
}
