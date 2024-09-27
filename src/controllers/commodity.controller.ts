import { Request, Response } from "express";
import {
  CommodityHistogramResponseSchema,
  CommodityHistogramResponse,
} from "../schemas/commodity.schema";
import { convertCsvToJson, countCommodities } from "../common/utils/csvUtils";
import { redisClient } from "..";

export const getCommodityHistogram = async (
  req: Request,
  res: Response
): Promise<any> => {
  try {
    const redisKey = "Projection2021:Commodity";
    const cachedData = await redisClient.get(redisKey);
    if (cachedData) {
      const cachedResult: CommodityHistogramResponse = JSON.parse(cachedData);
      return res.status(200).json(cachedResult);
    }
    const filePath = "Projection2021.csv";
    const jsonData = await convertCsvToJson(filePath);
    const result = countCommodities(jsonData, "Commodity");
    CommodityHistogramResponseSchema.parse(result);
    await redisClient.set(redisKey, JSON.stringify(result), {
      EX: 3600,
    });

    return res.status(200).json(result);
  } catch (error) {
    console.error("Error fetching data:", error);
    return res.status(500).json({ message: "Failed to fetch data." });
  }
};
