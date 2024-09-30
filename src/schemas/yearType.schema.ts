import { extendZodWithOpenApi } from "@asteasolutions/zod-to-openapi";
import { z } from "zod";

extendZodWithOpenApi(z);

export const YearTypeResponseSchema = z.object({
  "Market year": z.number().openapi({ description: "Data for the market year" }).optional(),
  "Calendar year": z.number().openapi({ description: "Data for the calendar year" }).optional(),
}).openapi({
  title: "YearType Response",
  description: "Response schema for YearType summary data",
});

export type YearTypeResponse = z.infer<typeof YearTypeResponseSchema>;
