import { StatusCodes } from "http-status-codes";
import type { z } from "zod";

import { ServiceResponseSchema } from "../schemas/serverResponse.schema";

export function createApiResponse(schema: z.ZodTypeAny, description: string, statusCode = StatusCodes.OK) {
  return {
    [statusCode]: {
      description,
      content: {
        "application/json": {
          schema: ServiceResponseSchema(schema),
        },
      },
    },
  };
}