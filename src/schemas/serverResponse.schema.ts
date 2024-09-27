import { z } from "zod";

export class ServiceResponse<T = null> {
  readonly success: boolean;
  readonly message: string;
  readonly responseObject: T;
  readonly statusCode: number;

  private constructor(
    success: boolean,
    message: string,
    responseObject: T,
    statusCode: number
  ) {
    this.success = success;
    this.message = message;
    this.responseObject = responseObject;
    this.statusCode = statusCode;
  }

  static success<T>(
    message: string,
    responseObject: T,
    statusCode: number = 200
  ) {
    return new ServiceResponse(true, message, responseObject, statusCode);
  }

  static failure<T>(
    message: string,
    responseObject: T,
    statusCode: number = 400
  ) {
    return new ServiceResponse(false, message, responseObject, statusCode);
  }
}

export const ServiceResponseSchema = <T extends z.ZodType<any>>(
  dataSchema: T
) => 
  dataSchema;