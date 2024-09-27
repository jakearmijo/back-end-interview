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
exports.countCommodities = countCommodities;
exports.convertCsvToJson = convertCsvToJson;
const fs = __importStar(require("fs"));
const csv_parser_1 = __importDefault(require("csv-parser"));
/**
 * Count the occurrences of each commodity in the data based on the specified attribute.
 * @param data Array of data rows.
 * @param attribute The name of the attribute to count.
 * @returns A record with commodity names as keys and their counts as values.
 */
function countCommodities(data, attribute) {
    const commodityCount = {};
    data.forEach((row) => {
        const element = row[attribute];
        if (commodityCount[element]) {
            commodityCount[element]++;
        }
        else {
            commodityCount[element] = 1;
        }
    });
    return commodityCount;
}
/**
 * Convert a CSV file to JSON.
 * @param filePath Path to the CSV file.
 * @returns A promise that resolves with the CSV content as an array of DataRow objects.
 */
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
