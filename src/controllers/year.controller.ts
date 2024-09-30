import { Request, Response } from "express";
import { convertCsvToJson, countCommodities } from "../common/utils/csvUtils";
import { YearResponseSchema } from "../schemas/year.schema";

export const getYearHistogram = async (
  req: Request,
  res: Response
): Promise<any> => {
  try {
    const filePath =
      process.env.NODE_ENV === "test"
        ? "TestProjection2021.csv"
        : "Projection2021.csv";
    const jsonData = await convertCsvToJson(filePath);
    const result = countCommodities(jsonData, "Year");
    YearResponseSchema.parse(result);
    if (!result) {
      return res.status(404).json(result);
    }
    return res.status(200).json(result);
  } catch (error) {
    console.error("Error fetching data:", error);
    return res.status(500).json({ message: "Failed to fetch data." });
  }
};
