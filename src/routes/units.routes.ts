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

unitsRouter.get("/histogram", async (req, res) => {
  try {
    const result = await getUnitsHistogram();
    res.status(200).json(result);
  } catch (error: any) {
    res.status(500).json({ message: error.message });
  }
});
export default unitsRouter;
