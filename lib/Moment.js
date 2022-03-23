"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const moment_timezone_1 = __importDefault(require("moment-timezone"));
class Moment {
    static format(timestamp) {
        return (0, moment_timezone_1.default)(timestamp).tz('Asia/Taipei').format('YYYY-MM-DD HH:mm:ss');
    }
}
exports.default = Moment;
