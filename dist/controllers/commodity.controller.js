"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getCommodityHistogram = void 0;
const commodity_schema_1 = require("../schemas/commodity.schema");
const csvUtils_1 = require("../common/utils/csvUtils");
const getCommodityHistogram = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const filePath = "Projection2021.csv";
        const jsonData = yield (0, csvUtils_1.convertCsvToJson)(filePath);
        const result = (0, csvUtils_1.countCommodities)(jsonData, "Commodity");
        commodity_schema_1.CommodityHistogramResponseSchema.parse(result);
        res.status(200).json({ data: result });
    }
    catch (error) {
        console.error("Error fetching data:", error);
        res.status(500).json({ message: "Failed to fetch data." });
    }
});
exports.getCommodityHistogram = getCommodityHistogram;
