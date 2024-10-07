import { DataService } from "../services";

export const getCommodityTypeHistogram = async (): Promise<any> => {
  const result = await DataService.getCommodityTypeHistogram();
  if (!result || result.length === 0) {
    throw new Error("getCommodityTypeHistogram no results");
  }
  return result;
};
