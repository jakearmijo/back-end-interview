import { extendZodWithOpenApi } from "@asteasolutions/zod-to-openapi";
import { z } from "zod";

extendZodWithOpenApi(z);

export const YearResponseSchema = z.object({
  "2019": z.number().openapi({ description: "Data for the year 2019" }).optional(),
  "2020": z.number().openapi({ description: "Data for the year 2020" }).optional(),
  "2021": z.number().openapi({ description: "Data for the year 2021" }).optional(),
  "2022": z.number().openapi({ description: "Data for the year 2022" }).optional(),
  "2023": z.number().openapi({ description: "Data for the year 2023" }).optional(),
  "2024": z.number().openapi({ description: "Data for the year 2024" }).optional(),
  "2025": z.number().openapi({ description: "Data for the year 2025" }).optional(),
  "2026": z.number().openapi({ description: "Data for the year 2026" }).optional(),
  "2027": z.number().openapi({ description: "Data for the year 2027" }).optional(),
  "2028": z.number().openapi({ description: "Data for the year 2028" }).optional(),
  "2029": z.number().openapi({ description: "Data for the year 2029" }).optional(),
  "2030": z.number().openapi({ description: "Data for the year 2030" }).optional(),
  "2019/20": z.number().openapi({ description: "Data for the year 2019/20" }).optional(),
  "2020/21": z.number().openapi({ description: "Data for the year 2020/21" }).optional(),
  "2021/22": z.number().openapi({ description: "Data for the year 2021/22" }).optional(),
  "2022/23": z.number().openapi({ description: "Data for the year 2022/23" }).optional(),
  "2023/24": z.number().openapi({ description: "Data for the year 2023/24" }).optional(),
  "2024/25": z.number().openapi({ description: "Data for the year 2024/25" }).optional(),
  "2025/26": z.number().openapi({ description: "Data for the year 2025/26" }).optional(),
  "2026/27": z.number().openapi({ description: "Data for the year 2026/27" }).optional(),
  "2027/28": z.number().openapi({ description: "Data for the year 2027/28" }).optional(),
  "2028/29": z.number().openapi({ description: "Data for the year 2028/29" }).optional(),
  "2029/30": z.number().openapi({ description: "Data for the year 2029/30" }).optional(),
  "2030/31": z.number().openapi({ description: "Data for the year 2030/31" }).optional(),
}).openapi({
  title: "Yearly Data Response",
  description: "Response schema for yearly data",
});

export type YearResponse = z.infer<typeof YearResponseSchema>;
