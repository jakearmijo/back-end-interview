import { Router } from "express";
import { z } from "zod";
import { OpenAPIRegistry } from "@asteasolutions/zod-to-openapi";
import { getCommodityHistogram } from "../controllers/commodity.controller";
import { CommodityHistogramResponseSchema } from "../schemas/commodity.schema";
import { createApiResponse } from "../openapi/responseBuilder";

export const commodityRegistry = new OpenAPIRegistry();
const commodityRouter = Router();

commodityRegistry.register("Commodity", CommodityHistogramResponseSchema);

commodityRegistry.registerPath({
  method: "get",
  path: "/commodity/histogram",
  tags: ["Commodity"],
  responses: createApiResponse(CommodityHistogramResponseSchema,
    "Success"
  ),
});

commodityRouter.get("/histogram", getCommodityHistogram);

export default commodityRouter;
