import { Router } from "express";
import { getAttributeHistogram } from "../controllers/attribute.controller";
import { OpenAPIRegistry } from "@asteasolutions/zod-to-openapi";
import { createApiResponse } from "../openapi/responseBuilder";
import { AttributeResponseSchema } from "../schemas/attribute.schema";

export const attributeRegistry = new OpenAPIRegistry();
const attributeRouter = Router();

attributeRegistry.register("Attribute", AttributeResponseSchema);
attributeRegistry.registerPath({
  method: "get",
  path: "/attribute/histogram",
  tags: ["Attribute"],
  responses: createApiResponse(AttributeResponseSchema, "Success"),
});

attributeRouter.get("/histogram", async (req, res) => {
  try {
    const result = await getAttributeHistogram();
    res.status(200).json(result);
  } catch (error: any) {
    res.status(500).json({ message: error.message });
  }
});

export default attributeRouter;
