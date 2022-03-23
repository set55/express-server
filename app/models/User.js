"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const SequelizeOrm_1 = __importDefault(require("../../lib/SequelizeOrm"));
// Valid
class User extends sequelize_1.Model {
}
User.init({
    id: {
        type: sequelize_1.DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    name: {
        type: sequelize_1.DataTypes.STRING(255),
        allowNull: false
    },
    account: {
        type: sequelize_1.DataTypes.STRING(30),
        allowNull: false
    },
    email: {
        type: sequelize_1.DataTypes.STRING(255)
    },
    email_verified_at: {
        type: sequelize_1.DataTypes.DATE,
    },
    password: {
        type: sequelize_1.DataTypes.STRING(255),
        allowNull: false
    },
    remember_token: {
        type: sequelize_1.DataTypes.STRING(100),
    },
    created_at: {
        type: sequelize_1.DataTypes.DATE
    },
    updated_at: {
        type: sequelize_1.DataTypes.DATE
    },
    deleted_at: {
        type: sequelize_1.DataTypes.DATE
    }
}, {
    sequelize: SequelizeOrm_1.default.sequelize,
    tableName: 'Users',
    timestamps: false
});
// console.log("The table for the User model was just (re)created!");
exports.default = User;
