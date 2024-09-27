"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ServiceResponseSchema = exports.ServiceResponse = void 0;
class ServiceResponse {
    constructor(success, message, responseObject, statusCode) {
        this.success = success;
        this.message = message;
        this.responseObject = responseObject;
        this.statusCode = statusCode;
    }
    static success(message, responseObject, statusCode = 200) {
        return new ServiceResponse(true, message, responseObject, statusCode);
    }
    static failure(message, responseObject, statusCode = 400) {
        return new ServiceResponse(false, message, responseObject, statusCode);
    }
}
exports.ServiceResponse = ServiceResponse;
const ServiceResponseSchema = (dataSchema) => dataSchema;
exports.ServiceResponseSchema = ServiceResponseSchema;
