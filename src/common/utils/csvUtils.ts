import * as fs from "fs";
import csv from "csv-parser";

interface DataRow {
  [key: string]: string | number;
}

/**
 * Count the occurrences of each commodity in the data based on the specified attribute.
 * @param data Array of data rows.
 * @param attribute The name of the attribute to count.
 * @returns A record with commodity names as keys and their counts as values.
 */
export function countCommodities(data: DataRow[], attribute: string): any[] {
  const commodityCount: any[] = [];

  const countMap: Record<string, number> = {};

  data.forEach((row) => {
    const element = row[attribute] as string;
    if (element) {
      if (countMap[element]) {
        countMap[element]++;
      } else {
        countMap[element] = 1;
        commodityCount.push({
          [attribute]: element,
          Count: 1,
        });
      }
    }
  });

  commodityCount.forEach((item) => {
    item.Count = countMap[item[attribute]];
  });

  return commodityCount;
}

/**
 * Convert a CSV file to JSON.
 * @param filePath Path to the CSV file.
 * @returns A promise that resolves with the CSV content as an array of DataRow objects.
 */
export async function convertCsvToJson(filePath: string): Promise<DataRow[]> {
  return new Promise((resolve, reject) => {
    const results: DataRow[] = [];

    fs.createReadStream(filePath)
      .pipe(csv())
      .on("data", (data: DataRow) => results.push(data))
      .on("end", () => {
        resolve(results);
      })
      .on("error", (error) => {
        reject(error);
      });
  });
}

export type { DataRow };
