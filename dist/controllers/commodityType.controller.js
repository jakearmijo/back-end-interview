"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getCommodityTypeHistogram = void 0;
const fs = __importStar(require("fs"));
const csv_parser_1 = __importDefault(require("csv-parser"));
function countCommodities(data) {
    const commodityCount = {};
    data.forEach((row) => {
        const commodityType = row["CommodityType"];
        if (commodityCount[commodityType]) {
            commodityCount[commodityType]++;
        }
        else {
            commodityCount[commodityType] = 1;
        }
    });
    return commodityCount;
}
function convertCsvToJson(filePath) {
    return __awaiter(this, void 0, void 0, function* () {
        return new Promise((resolve, reject) => {
            const results = [];
            fs.createReadStream(filePath)
                .pipe((0, csv_parser_1.default)())
                .on("data", (data) => results.push(data))
                .on("end", () => {
                resolve(results);
            })
                .on("error", (error) => {
                reject(error);
            });
        });
    });
}
const getCommodityTypeHistogram = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const filePath = "Projection2021.csv";
        const jsonData = yield convertCsvToJson(filePath);
        const result = countCommodities(jsonData);
        res.status(200).json(result);
    }
    catch (error) {
        console.error("Error fetching data:", error);
        res.status(500).json({ message: "Failed to fetch data." });
    }
});
exports.getCommodityTypeHistogram = getCommodityTypeHistogram;
