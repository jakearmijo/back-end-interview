import {
  countCommodities,
  convertCsvToJson,
  DataRow,
} from "../../common/utils/csvUtils";

import * as fs from "fs";
import { Readable } from "stream";
describe("countCommodities", () => {
  it("should count occurrences of each commodity", () => {
    const data = [
      { name: "apple", price: 10 },
      { name: "banana", price: 20 },
      { name: "apple", price: 30 },
      { name: "orange", price: 25 },
      { name: "banana", price: 15 },
    ];

    const result = countCommodities(data, "name");

    expect(result).toEqual({
      apple: 2,
      banana: 2,
      orange: 1,
    });
  });

  it("should return an empty object if data is empty", () => {
    const result = countCommodities([], "name");
    expect(result).toEqual({});
  });

  it("should handle missing attributes gracefully", () => {
    const data = [
      { name: "apple" },
      { price: 30 },
      { name: "orange" },
    ] as DataRow[];
    const result = countCommodities(data, "name");
    expect(result).toEqual({
      apple: 1,
      orange: 1,
    });
  });
});

jest.mock("fs");

describe("convertCsvToJson", () => {
  it("should convert CSV file to JSON", async () => {
    const mockCsvData = [
      "name,price",
      "apple,10",
      "banana,20",
      "orange,30",
    ].join("\n");

    (fs.createReadStream as jest.Mock).mockReturnValue(
      Readable.from([mockCsvData])
    );

    const result = await convertCsvToJson("path/to/file.csv");

    expect(result).toEqual([
      { name: "apple", price: "10" },
      { name: "banana", price: "20" },
      { name: "orange", price: "30" },
    ]);
  });

  it("should handle empty CSV file", async () => {
    const mockCsvData = "";

    (fs.createReadStream as jest.Mock).mockReturnValue(
      Readable.from([mockCsvData])
    );

    const result = await convertCsvToJson("path/to/empty.csv");
    expect(result).toEqual([]);
  });

  it("should handle CSV parsing errors", async () => {
    const mockError = new Error("File not found");
    (fs.createReadStream as jest.Mock).mockImplementation(() => {
      const stream = new Readable({
        read() {
          this.emit("error", mockError);
          this.emit("end");
        },
      });
      return stream;
    });
    await expect(convertCsvToJson("invalid_file.csv")).rejects.toThrow("File not found");
  });
});
