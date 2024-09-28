import { Request, Response } from "express";
import { convertCsvToJson, countCommodities } from "../common/utils/csvUtils";
import {
  AttributeHistogramResponse,
  AttributeResponseSchema,
} from "../schemas/attribute.schema";
import { redisClient } from "..";

export const getAttributeHistogram = async (
  req: Request,
  res: Response
): Promise<any> => {
  try {
    const redisKey = "Projection2021:Attribute";
    const cachedData = await redisClient.get(redisKey);
    if (cachedData) {
      const cachedResult: AttributeHistogramResponse = JSON.parse(cachedData);
      return res.status(200).json(cachedResult);
    }
    const filePath = process.env.NODE_ENV === 'test' ? "TestProjection2021.csv" : "Projection2021.csv";
    const jsonData = await convertCsvToJson(filePath);
    const result = countCommodities(jsonData, "Attribute");
    AttributeResponseSchema.parse(result);
    await redisClient.set(redisKey, JSON.stringify(result), {
      EX: 3600,
    });

    return res.status(200).json(result);
  } catch (error) {
    console.error("Error fetching data:", error);
    return res.status(500).json({ message: "Failed to fetch data." });
  }
};
