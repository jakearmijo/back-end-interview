import { extendZodWithOpenApi } from "@asteasolutions/zod-to-openapi";
import { z } from "zod";

extendZodWithOpenApi(z);

export const UnitsResponseSchema = z
.array(z.object({
    Units: z.string().openapi({ description: "Units Name" }),
    Count: z.number().openapi({ description: "Total Count" }),
  })
  .openapi({
    title: "Units Response",
    description: "Response schema for units",
  }));

export type UnitsResponse = z.infer<typeof UnitsResponseSchema>;
