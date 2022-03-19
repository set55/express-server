"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const DemoController_1 = __importDefault(require("../app/controllers/DemoController"));
const router = (0, express_1.Router)();
const demoController = new DemoController_1.default();
router.get('/', demoController.index);
exports.default = router;
