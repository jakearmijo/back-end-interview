import { extendZodWithOpenApi } from "@asteasolutions/zod-to-openapi";
import { z } from "zod";

extendZodWithOpenApi(z);

export const CommodityTypeHistogramResponseSchema = z.object({
  Crops: z.number().openapi({ description: "Amount of Crops" }),
  "Livestock/Dairy": z.number().openapi({ description: "Amount of Livestock/Dairy" }),
}).openapi({
  title: "Commodity Type Histogram Response",
  description: "A histogram of commodity type data",
});

export type CommodityTypeHistogramResponse = z.infer<typeof CommodityTypeHistogramResponseSchema>;
