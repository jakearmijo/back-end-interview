import { DataService } from "../services";

export const getCommodityHistogram = async (): Promise<any> => {
  const result = await DataService.getCommodityHistogram();
  if (!result || result.length === 0) {
    throw new Error("getCommodityHistogram no results");
  }
  return result;
};
