import { extendZodWithOpenApi } from "@asteasolutions/zod-to-openapi";
import { z } from "zod";

extendZodWithOpenApi(z);

export const YearResponseSchema = z.array(
  z
    .object({
      Year: z.string().openapi({ description: "Year" }),
      Count: z.number().openapi({ description: "Total Count" }),
    })
    .openapi({
      title: "Yearly Data Response",
      description: "Response schema for yearly data",
    })
);

export type YearResponse = z.infer<typeof YearResponseSchema>;
