import { extendZodWithOpenApi } from "@asteasolutions/zod-to-openapi";
import { z } from "zod";

extendZodWithOpenApi(z);

export const CommodityHistogramResponseSchema = z.object({
  Rice: z.number().openapi({ description: "Amount of Rice" }),
  Barley: z.number().openapi({ description: "Amount of Barley" }),
  Corn: z.number().openapi({ description: "Amount of Corn" }),
  "Upland Cotton": z.number().openapi({ description: "Amount of Upland Cotton" }),
  Oats: z.number().openapi({ description: "Amount of Oats" }),
  Sorghum: z.number().openapi({ description: "Amount of Sorghum" }),
  Soybeans: z.number().openapi({ description: "Amount of Soybeans" }),
  Wheat: z.number().openapi({ description: "Amount of Wheat" }),
  Egg: z.number().openapi({ description: "Amount of Egg" }),
  "Per capita meat consumption, retail weight": z.number().openapi({ description: "Meat consumption per capita" }),
  Beef: z.number().openapi({ description: "Amount of Beef" }),
  Pork: z.number().openapi({ description: "Amount of Pork" }),
  Dairy: z.number().openapi({ description: "Amount of Dairy" }),
  Chicken: z.number().openapi({ description: "Amount of Chicken" }),
  Turkey: z.number().openapi({ description: "Amount of Turkey" }),
  "Soybean oil": z.number().openapi({ description: "Amount of Soybean oil" }),
  "Soybean meal": z.number().openapi({ description: "Amount of Soybean meal" }),
}).openapi({
  title: "Commodity Histogram Response",
  description: "A histogram of commodity data",
});

export type CommodityHistogramResponse = z.infer<typeof CommodityHistogramResponseSchema>;
