import { extendZodWithOpenApi } from "@asteasolutions/zod-to-openapi";
import { z } from "zod";

extendZodWithOpenApi(z);

export const AttributeResponseSchema = z.array(z.object({
  Attribute: z.string().openapi({ description: "Attribute Name" }),
  Count: z.number().openapi({ description: "Total Count" }),
}).openapi({
  title: "Attribute Histogram Response",
  description: "Response containing various attribute data metrics",
}));

export type AttributeHistogramResponse = z.infer<typeof AttributeResponseSchema>;