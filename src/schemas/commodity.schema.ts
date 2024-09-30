import { extendZodWithOpenApi } from "@asteasolutions/zod-to-openapi";
import { z } from "zod";

extendZodWithOpenApi(z);

export const CommodityHistogramResponseSchema = z.object({
  Rice: z.number().openapi({ description: "Amount of Rice" }).optional(),
  Barley: z.number().openapi({ description: "Amount of Barley" }).optional(),
  Corn: z.number().openapi({ description: "Amount of Corn" }).optional(),
  "Upland Cotton": z.number().openapi({ description: "Amount of Upland Cotton" }).optional(),
  Oats: z.number().openapi({ description: "Amount of Oats" }).optional(),
  Sorghum: z.number().openapi({ description: "Amount of Sorghum" }).optional(),
  Soybeans: z.number().openapi({ description: "Amount of Soybeans" }).optional(),
  Wheat: z.number().openapi({ description: "Amount of Wheat" }).optional(),
  Egg: z.number().openapi({ description: "Amount of Egg" }).optional(),
  "Per capita meat consumption, retail weight": z.number().openapi({ description: "Meat consumption per capita" }).optional(),
  Beef: z.number().openapi({ description: "Amount of Beef" }).optional(),
  Pork: z.number().openapi({ description: "Amount of Pork" }).optional(),
  Dairy: z.number().openapi({ description: "Amount of Dairy" }).optional(),
  Chicken: z.number().openapi({ description: "Amount of Chicken" }).optional(),
  Turkey: z.number().openapi({ description: "Amount of Turkey" }).optional(),
  "Soybean oil": z.number().openapi({ description: "Amount of Soybean oil" }).optional(),
  "Soybean meal": z.number().openapi({ description: "Amount of Soybean meal" }).optional(),
}).openapi({
  title: "Commodity Histogram Response",
  description: "A histogram of commodity data",
});

export type CommodityHistogramResponse = z.infer<typeof CommodityHistogramResponseSchema>;
