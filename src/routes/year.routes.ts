import { Router } from "express";
import { getYearHistogram } from "../controllers/year.controller";

import { OpenAPIRegistry } from "@asteasolutions/zod-to-openapi";
import { createApiResponse } from "../openapi/responseBuilder";
import { YearResponseSchema } from "../schemas/year.schema";

export const yearRegistry = new OpenAPIRegistry();

const yearRouter = Router();

yearRegistry.register("Year", YearResponseSchema);
yearRegistry.registerPath({
  method: "get",
  path: "/year/histogram",
  tags: ["Year"],
  responses: createApiResponse(YearResponseSchema, "Success"),
});

yearRouter.get("/histogram", async (req, res) => {
  try {
    const result = await getYearHistogram();
    res.status(200).json(result);
  } catch (error: any) {
    res.status(500).json({ message: error.message });
  }
});
export default yearRouter;
