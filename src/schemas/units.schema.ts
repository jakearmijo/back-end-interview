import { extendZodWithOpenApi } from "@asteasolutions/zod-to-openapi";
import { z } from "zod";

extendZodWithOpenApi(z);

export const UnitsResponseSchema = z
  .object({
    "Thousand acres": z
      .number()
      .openapi({ description: "Area in Thousand acres" })
      .optional(),
    "Million acres": z
      .number()
      .openapi({ description: "Area in Million acres" })
      .optional(),
    "Number per capita": z
      .number()
      .openapi({ description: "Number of items per capita" })
      .optional(),
    "Pounds per capita": z
      .number()
      .openapi({ description: "Pounds of items per capita" })
      .optional(),
    "Million bushels": z
      .number()
      .openapi({ description: "Volume in Million bushels" })
      .optional(),
    "Thousand bales": z
      .number()
      .openapi({ description: "Count in Thousand bales" })
      .optional(),
    "Thousand head": z
      .number()
      .openapi({ description: "Count in Thousand head" })
      .optional(),
    Thousand: z
      .number()
      .openapi({ description: "Count in Thousand" })
      .optional(),
    "Million dozen": z
      .number()
      .openapi({ description: "Count in Million dozen" })
      .optional(),
    "Dollars per acre": z
      .number()
      .openapi({ description: "Dollars per acre" })
      .optional(),
    "Dollars per bushel": z
      .number()
      .openapi({ description: "Dollars per bushel" })
      .optional(),
    "Cents per pound": z
      .number()
      .openapi({ description: "Cents per pound" })
      .optional(),
    Percent: z.number().openapi({ description: "Percentage value" }).optional(),
    "Dollars per pound": z
      .number()
      .openapi({ description: "Dollars per pound" })
      .optional(),
    "Dollars per short ton": z
      .number()
      .openapi({ description: "Dollars per short ton" })
      .optional(),
    "Dollars per hundredweight": z
      .number()
      .openapi({ description: "Dollars per hundredweight" })
      .optional(),
    "Cents per dozen": z
      .number()
      .openapi({ description: "Cents per dozen" })
      .optional(),
    "Pounds per bushel": z
      .number()
      .openapi({ description: "Pounds per bushel" })
      .optional(),
    Dollars: z.number().openapi({ description: "Total Dollars" }).optional(),
    "Million hundredweight": z
      .number()
      .openapi({ description: "Volume in Million hundredweight" })
      .optional(),
    Pounds: z.number().openapi({ description: "Total Pounds" }).optional(),
    "Billion pounds": z
      .number()
      .openapi({ description: "Total in Billion pounds" })
      .optional(),
    "Million pounds": z
      .number()
      .openapi({ description: "Volume in Million pounds" })
      .optional(),
    "Thousand short tons": z
      .number()
      .openapi({ description: "Count in Thousand short tons" })
      .optional(),
    "Bushels per acre": z
      .number()
      .openapi({ description: "Bushels per acre" })
      .optional(),
    "Pounds per acre": z
      .number()
      .openapi({ description: "Pounds per acre" })
      .optional(),
  })
  .openapi({
    title: "Agricultural Data Response",
    description: "Response schema for agricultural data",
  });

export type UnitsResponse = z.infer<typeof UnitsResponseSchema>;
