import { extendZodWithOpenApi } from "@asteasolutions/zod-to-openapi";
import { z } from "zod";

extendZodWithOpenApi(z);

export const CommodityTypeHistogramResponseSchema = z
.array(z.object({
    CommodityType: z
      .string()
      .openapi({ description: "Commodity Type Name" }),
    Count: z.number().openapi({ description: "Total Count" }),
  })
  .openapi({
    title: "Commodity Type Histogram Response",
    description: "A histogram of commodity type data",
  }));

export type CommodityTypeHistogramResponse = z.infer<
  typeof CommodityTypeHistogramResponseSchema
>;
