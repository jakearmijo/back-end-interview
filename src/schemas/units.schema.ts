import { extendZodWithOpenApi } from "@asteasolutions/zod-to-openapi";
import { z } from "zod";

extendZodWithOpenApi(z);

export const UnitsResponseSchema = z
  .object({
    "Thousand acres": z
      .number()
      .openapi({ description: "Area in Thousand acres" }),
    "Million acres": z
      .number()
      .openapi({ description: "Area in Million acres" }),
    "Number per capita": z
      .number()
      .openapi({ description: "Number of items per capita" }),
    "Pounds per capita": z
      .number()
      .openapi({ description: "Pounds of items per capita" }),
    "Million bushels": z
      .number()
      .openapi({ description: "Volume in Million bushels" }),
    "Thousand bales": z
      .number()
      .openapi({ description: "Count in Thousand bales" }),
    "Thousand head": z
      .number()
      .openapi({ description: "Count in Thousand head" }),
    Thousand: z.number().openapi({ description: "Count in Thousand" }),
    "Million dozen": z
      .number()
      .openapi({ description: "Count in Million dozen" }),
    "Dollars per acre": z.number().openapi({ description: "Dollars per acre" }),
    "Dollars per bushel": z
      .number()
      .openapi({ description: "Dollars per bushel" }),
    "Cents per pound": z.number().openapi({ description: "Cents per pound" }),
    Percent: z.number().openapi({ description: "Percentage value" }),
    "Dollars per pound": z
      .number()
      .openapi({ description: "Dollars per pound" }),
    "Dollars per short ton": z
      .number()
      .openapi({ description: "Dollars per short ton" }),
    "Dollars per hundredweight": z
      .number()
      .openapi({ description: "Dollars per hundredweight" }),
    "Cents per dozen": z.number().openapi({ description: "Cents per dozen" }),
    "Pounds per bushel": z
      .number()
      .openapi({ description: "Pounds per bushel" }),
    Dollars: z.number().openapi({ description: "Total Dollars" }),
    "Million hundredweight": z
      .number()
      .openapi({ description: "Volume in Million hundredweight" }),
    Pounds: z.number().openapi({ description: "Total Pounds" }),
    "Billion pounds": z
      .number()
      .openapi({ description: "Total in Billion pounds" }),
    "Million pounds": z
      .number()
      .openapi({ description: "Volume in Million pounds" }),
    "Thousand short tons": z
      .number()
      .openapi({ description: "Count in Thousand short tons" }),
    "Bushels per acre": z.number().openapi({ description: "Bushels per acre" }),
    "Pounds per acre": z.number().openapi({ description: "Pounds per acre" }),
  })
  .openapi({
    title: "Agricultural Data Response",
    description: "Response schema for agricultural data",
  });

export type UnitsResponse = z.infer<typeof UnitsResponseSchema>;
