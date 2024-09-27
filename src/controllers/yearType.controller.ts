import { Request, Response } from "express";
import { convertCsvToJson, countCommodities } from "../common/utils/csvUtils";
import {
  YearTypeResponseSchema,
  YearTypeResponse,
} from "../schemas/yearType.schema";
import { redisClient } from "..";

export const getYearTypeHistogram = async (
  req: Request,
  res: Response
): Promise<any> => {
  try {
    const redisKey = "Projection2021:YearType";
    const cachedData = await redisClient.get(redisKey);
    if (cachedData) {
      const cachedResult: YearTypeResponse = JSON.parse(cachedData);
      return res.status(200).json(cachedResult);
    }
    const filePath = "Projection2021.csv";
    const jsonData = await convertCsvToJson(filePath);
    const result = countCommodities(jsonData, "YearType");
    YearTypeResponseSchema.parse(result);
    await redisClient.set(redisKey, JSON.stringify(result), {
      EX: 3600,
    });

    return res.status(200).json(result);
  } catch (error) {
    console.error("Error fetching data:", error);
    return res.status(500).json({ message: "Failed to fetch data." });
  }
};
