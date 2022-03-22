"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const helmet_1 = __importDefault(require("helmet"));
const cookie_parser_1 = __importDefault(require("cookie-parser"));
const morgan_1 = __importDefault(require("morgan"));
const cors_1 = __importDefault(require("cors"));
const route_1 = __importDefault(require("../route"));
class ExpressMaker {
    constructor() {
        this.app = (0, express_1.default)();
        this.app.use((0, helmet_1.default)());
        this.app.use((0, cookie_parser_1.default)());
        this.app.use((0, morgan_1.default)('tiny'));
        this.app.use((0, cors_1.default)());
        this.app.use(route_1.default);
        console.log(process.env.TEST, 123);
    }
}
exports.default = ExpressMaker;
