import { Router } from "express";
import { getYearTypeHistogram } from "../controllers/yearType.controller";
import { OpenAPIRegistry } from "@asteasolutions/zod-to-openapi";
import { createApiResponse } from "../openapi/responseBuilder";
import { YearTypeResponseSchema } from "../schemas/yearType.schema";

export const yearTypeRegistry = new OpenAPIRegistry();

const yearTypeRouter = Router();

yearTypeRegistry.register("Year Type", YearTypeResponseSchema);
yearTypeRegistry.registerPath({
  method: "get",
  path: "/yearType/histogram",
  tags: ["Year Type"],
  responses: createApiResponse(YearTypeResponseSchema, "Success"),
});

yearTypeRouter.get("/histogram", getYearTypeHistogram);

export default yearTypeRouter;
