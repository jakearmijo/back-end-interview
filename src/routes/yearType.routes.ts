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

yearTypeRouter.get("/histogram", async (req, res) => {
  try {
    const result = await getYearTypeHistogram();
    res.status(200).json(result);
  } catch (error: any) {
    res.status(500).json({ message: error.message });
  }
});
export default yearTypeRouter;
