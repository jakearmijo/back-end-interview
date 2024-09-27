"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const yearType_controller_1 = require("../controllers/yearType.controller");
const yearTypeRouter = (0, express_1.Router)();
yearTypeRouter.get("/histogram", yearType_controller_1.getYearTypeHistogram);
exports.default = yearTypeRouter;
