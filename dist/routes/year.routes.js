"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const year_controller_1 = require("../controllers/year.controller");
const yearRouter = (0, express_1.Router)();
yearRouter.get("/histogram", year_controller_1.getYearHistogram);
exports.default = yearRouter;
