import { extendZodWithOpenApi } from "@asteasolutions/zod-to-openapi";
import { z } from "zod";

extendZodWithOpenApi(z);

export const YearTypeResponseSchema = z.array(
  z
    .object({
      YearType: z.string().openapi({ description: "Year Type Name" }),
      Count: z.number().openapi({ description: "Total Count" }),
    })
    .openapi({
      title: "YearType Response",
      description: "Response schema for YearType summary data",
    })
);

export type YearTypeResponse = z.infer<typeof YearTypeResponseSchema>;
