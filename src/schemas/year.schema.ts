import { extendZodWithOpenApi } from "@asteasolutions/zod-to-openapi";
import { z } from "zod";

extendZodWithOpenApi(z);

export const YearResponseSchema = z.object({
  "2019": z.number().openapi({ description: "Data for the year 2019" }),
  "2020": z.number().openapi({ description: "Data for the year 2020" }),
  "2021": z.number().openapi({ description: "Data for the year 2021" }),
  "2022": z.number().openapi({ description: "Data for the year 2022" }),
  "2023": z.number().openapi({ description: "Data for the year 2023" }),
  "2024": z.number().openapi({ description: "Data for the year 2024" }),
  "2025": z.number().openapi({ description: "Data for the year 2025" }),
  "2026": z.number().openapi({ description: "Data for the year 2026" }),
  "2027": z.number().openapi({ description: "Data for the year 2027" }),
  "2028": z.number().openapi({ description: "Data for the year 2028" }),
  "2029": z.number().openapi({ description: "Data for the year 2029" }),
  "2030": z.number().openapi({ description: "Data for the year 2030" }),
  "2019/20": z.number().openapi({ description: "Data for the year 2019/20" }),
  "2020/21": z.number().openapi({ description: "Data for the year 2020/21" }),
  "2021/22": z.number().openapi({ description: "Data for the year 2021/22" }),
  "2022/23": z.number().openapi({ description: "Data for the year 2022/23" }),
  "2023/24": z.number().openapi({ description: "Data for the year 2023/24" }),
  "2024/25": z.number().openapi({ description: "Data for the year 2024/25" }),
  "2025/26": z.number().openapi({ description: "Data for the year 2025/26" }),
  "2026/27": z.number().openapi({ description: "Data for the year 2026/27" }),
  "2027/28": z.number().openapi({ description: "Data for the year 2027/28" }),
  "2028/29": z.number().openapi({ description: "Data for the year 2028/29" }),
  "2029/30": z.number().openapi({ description: "Data for the year 2029/30" }),
  "2030/31": z.number().openapi({ description: "Data for the year 2030/31" }),
}).openapi({
  title: "Yearly Data Response",
  description: "Response schema for yearly data",
});

export type YearResponse = z.infer<typeof YearResponseSchema>;
