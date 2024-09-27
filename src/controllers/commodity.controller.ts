import { Request, Response } from "express";
import { CommodityHistogramResponseSchema } from "../schemas/commodity.schema";
import { convertCsvToJson, countCommodities } from "../common/utils/csvUtils";

export const getCommodityHistogram = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const filePath = "Projection2021.csv";
    const jsonData = await convertCsvToJson(filePath);
    const result = countCommodities(jsonData, "Commodity");
    CommodityHistogramResponseSchema.parse(result);
    res.status(200).json({ data: result });
  } catch (error) {
    console.error("Error fetching data:", error);
    res.status(500).json({ message: "Failed to fetch data." });
  }
};
