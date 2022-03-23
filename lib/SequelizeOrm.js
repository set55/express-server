"use strict";
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
const sequelize_1 = require("sequelize");
require("dotenv/config");
const await_to_js_1 = __importDefault(require("await-to-js"));
const Logger_1 = __importDefault(require("./Logger"));
class SequelizeOrm {
    static connectTest() {
        return __awaiter(this, void 0, void 0, function* () {
            let [err] = yield (0, await_to_js_1.default)(SequelizeOrm.sequelize.authenticate());
            if (err) {
                Logger_1.default.error(`mysql connect fail:`, err);
                return;
            }
            Logger_1.default.info('connect success');
        });
    }
}
SequelizeOrm.sequelize = new sequelize_1.Sequelize(process.env.MYSQL_DATABASE, process.env.MYSQL_USERNAME, process.env.MYSQL_PASSWORD, {
    host: process.env.MYSQL_HOST,
    dialect: 'mysql'
});
exports.default = SequelizeOrm;
