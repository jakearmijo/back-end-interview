import { DataService } from "../services";

export const getUnitsHistogram = async (): Promise<any> => {
  const result = await DataService.getUnitsHistogram();
  if (!result || result.length === 0) {
    throw new Error("getUnitsHistogram no results");
  }
  return result;
};
