import { DataService } from "../services";

export const getAttributeHistogram = async (): Promise<any> => {
  const result = await DataService.getAttributeHistogram();
  if (!result || result.length === 0) {
    throw new Error("getAttributeHistogram no results");
  }
  return result;
};
