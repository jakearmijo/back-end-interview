import { DataService } from "../services";

export const getYearTypeHistogram = async (): Promise<any> => {
  const result = await DataService.getYearTypeHistogram();
  if (!result || result.length === 0) {
    throw new Error("getYearTypeHistogram no results");
  }
  return result;
};

