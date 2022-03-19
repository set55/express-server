"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Greeter_1 = __importDefault(require("../models/Greeter"));
class DemoController {
    index(req, res) {
        let greeter = new Greeter_1.default('Set');
        res.send(greeter.greet());
    }
}
exports.default = DemoController;
