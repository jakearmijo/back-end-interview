import { Request, Response } from "express";
import * as fs from "fs";
import csv from "csv-parser";

interface DataRow {
  [key: string]: string | number;
}

function countCommodities(data: DataRow[]): Record<string, number> {
  const commodityCount: Record<string, number> = {};

  data.forEach((row) => {
    const element = row["Units"] as string;
    if (commodityCount[element]) {
      commodityCount[element]++;
    } else {
      commodityCount[element] = 1;
    }
  });

  return commodityCount;
}

async function convertCsvToJson(filePath: string): Promise<DataRow[]> {
  return new Promise((resolve, reject) => {
    const results: DataRow[] = [];

    fs.createReadStream(filePath)
      .pipe(csv())
      .on("data", (data: DataRow) => results.push(data))
      .on("end", () => {
        resolve(results);
      })
      .on("error", (error: any) => {
        reject(error);
      });
  });
}

export const getUnitsHistogram = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const filePath = "Projection2021.csv";
    const jsonData = await convertCsvToJson(filePath);
    

    const result = countCommodities(jsonData);

    res.status(200).json(result);
  } catch (error) {
    console.error("Error fetching data:", error);
    res.status(500).json({ message: "Failed to fetch data." });
  }
};
