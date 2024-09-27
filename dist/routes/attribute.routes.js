"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const attribute_controller_1 = require("../controllers/attribute.controller");
const attributeRouter = (0, express_1.Router)();
attributeRouter.get("/histogram", attribute_controller_1.getAttributeHistogram);
exports.default = attributeRouter;
