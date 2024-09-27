import * as fs from "fs";
import csv from "csv-parser";

interface DataRow {
  [key: string]: string | number;
}

function countCommodities(data: DataRow[]): Record<string, number> {
  const commodityCount: Record<string, number> = {};

  data.forEach((row) => {
    const element = row["Attribute"] as string;
    console.log("🚀 ~ data.forEach ~ element:", element);

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
