import { DataService } from "../services";

export const getYearHistogram = async (): Promise<any> => {
  const result = await DataService.getYearHistogram();
  if (!result || result.length === 0) {
    throw new Error("getYearHistogram no results");
  }
  return result;
};
