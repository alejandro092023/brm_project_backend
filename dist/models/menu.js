"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const connection_1 = __importDefault(require("../db/connection"));
const sequelize_1 = require("sequelize");
const Menu = connection_1.default.define("menu", {
    menu_id: {
        type: sequelize_1.DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    name_: {
        type: sequelize_1.DataTypes.STRING,
    },
    router_link: {
        type: sequelize_1.DataTypes.STRING,
    },
    type_: {
        type: sequelize_1.DataTypes.STRING,
    },
    status_: {
        type: sequelize_1.DataTypes.TINYINT,
    },
}, {
    createdAt: false,
    updatedAt: false,
    freezeTableName: true,
    timestamps: true,
});
exports.default = Menu;
