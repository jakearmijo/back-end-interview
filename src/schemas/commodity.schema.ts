import { extendZodWithOpenApi } from "@asteasolutions/zod-to-openapi";
import { z } from "zod";

extendZodWithOpenApi(z);

export const CommodityHistogramResponseSchema = z
  .array(
    z.object({
      Commodity: z.string().openapi({ description: "Commodity Name" }),
      Count: z.number().openapi({ description: "Total Count" }),
    })
  )
  .openapi({
    title: "Commodity Histogram Response",
    description: "A histogram of commodity data",
  });

export type CommodityHistogramResponse = z.infer<
  typeof CommodityHistogramResponseSchema
>;
