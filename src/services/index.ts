import { convertCsvToJson, countCommodities } from "../common/utils/csvUtils";
import { AttributeResponseSchema } from "../schemas/attribute.schema";
import { CommodityHistogramResponseSchema } from "../schemas/commodity.schema";
import { CommodityTypeHistogramResponseSchema } from "../schemas/commodityType.schema";
import { UnitsResponseSchema } from "../schemas/units.schema";
import { YearResponseSchema } from "../schemas/year.schema";
import { YearTypeResponseSchema } from "../schemas/yearType.schema";

export class DataService {
  static async getAttributeHistogram(): Promise<any> {
    const filePath =
      process.env.NODE_ENV === "test"
        ? "TestProjection2021.csv"
        : "Projection2021.csv";
    const jsonData = await convertCsvToJson(filePath);
    const result = countCommodities(jsonData, "Attribute");
    AttributeResponseSchema.parse(result);
    return result;
  }
  static async getCommodityHistogram(): Promise<any> {
    const filePath =
      process.env.NODE_ENV === "test"
        ? "TestProjection2021.csv"
        : "Projection2021.csv";
    const jsonData = await convertCsvToJson(filePath);
    const result = countCommodities(jsonData, "Commodity");
    CommodityHistogramResponseSchema.parse(result);
    return result;
  }
  static async getCommodityTypeHistogram(): Promise<any> {
    const filePath =
      process.env.NODE_ENV === "test"
        ? "TestProjection2021.csv"
        : "Projection2021.csv";
    const jsonData = await convertCsvToJson(filePath);
    const result = countCommodities(jsonData, "CommodityType");
    CommodityTypeHistogramResponseSchema.parse(result);
    return result;
  }
  static async getUnitsHistogram(): Promise<any> {
    const filePath =
      process.env.NODE_ENV === "test"
        ? "TestProjection2021.csv"
        : "Projection2021.csv";
    const jsonData = await convertCsvToJson(filePath);
    const result = countCommodities(jsonData, "Units");
    UnitsResponseSchema.parse(result);
    return result;
  }
  static async getYearHistogram(): Promise<any> {
    const filePath =
      process.env.NODE_ENV === "test"
        ? "TestProjection2021.csv"
        : "Projection2021.csv";
    const jsonData = await convertCsvToJson(filePath);
    const result = countCommodities(jsonData, "Year");
    YearResponseSchema.parse(result);
    return result;
  }
  static async getYearTypeHistogram(): Promise<any> {
    const filePath =
      process.env.NODE_ENV === "test"
        ? "TestProjection2021.csv"
        : "Projection2021.csv";
    const jsonData = await convertCsvToJson(filePath);
    const result = countCommodities(jsonData, "YearType");
    YearTypeResponseSchema.parse(result);
    return result;
  }
}
