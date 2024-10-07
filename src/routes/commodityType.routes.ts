import { Router } from "express";
import { z } from "zod";
import { OpenAPIRegistry } from "@asteasolutions/zod-to-openapi";
import { CommodityTypeHistogramResponseSchema } from "../schemas/commodityType.schema";
import { createApiResponse } from "../openapi/responseBuilder";
import { getCommodityTypeHistogram } from "../controllers/commodityType.controller";

export const commodityTypeRegistry = new OpenAPIRegistry();
const commodityTypeRouter = Router();

commodityTypeRegistry.register(
  "Commodity Type",
  CommodityTypeHistogramResponseSchema
);
commodityTypeRegistry.registerPath({
  method: "get",
  path: "/commodityType/histogram",
  tags: ["Commodity Type"],
  responses: createApiResponse(CommodityTypeHistogramResponseSchema, "Success"),
});

commodityTypeRouter.get("/histogram", async (req, res) => {
  try {
    const result = await getCommodityTypeHistogram();
    res.status(200).json(result);
  } catch (error: any) {
    res.status(500).json({ message: error.message });
  }
});

export default commodityTypeRouter;
