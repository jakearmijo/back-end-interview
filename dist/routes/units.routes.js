"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const units_controller_1 = require("../controllers/units.controller");
const unitsRouter = (0, express_1.Router)();
unitsRouter.get("/histogram", units_controller_1.getUnitsHistogram);
exports.default = unitsRouter;
