import { Router } from "express";
import { getUnitsHistogram } from "../controllers/units.controller";
import { OpenAPIRegistry } from "@asteasolutions/zod-to-openapi";
import { createApiResponse } from "../openapi/responseBuilder";
import { UnitsResponseSchema } from "../schemas/units.schema";

export const unitsRegistry = new OpenAPIRegistry();
const unitsRouter = Router();

unitsRegistry.register("Units", UnitsResponseSchema);
unitsRegistry.registerPath({
  method: "get",
  path: "/units/histogram",
  tags: ["Units"],
  responses: createApiResponse(UnitsResponseSchema, "Success"),
});

unitsRouter.get("/histogram", getUnitsHistogram);

export default unitsRouter;
