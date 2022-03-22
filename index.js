"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const ExpressMaker_1 = __importDefault(require("./lib/ExpressMaker"));
require("dotenv/config");
const app = (new ExpressMaker_1.default()).app;
console.log(process.env.TEST);
app.listen(3000);
console.log('server listen 3000');
