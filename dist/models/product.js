"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const connection_1 = __importDefault(require("../db/connection"));
const Product = connection_1.default.define("product", {
    product_id: {
        type: sequelize_1.DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    name_: {
        type: sequelize_1.DataTypes.STRING,
    },
    set_: {
        type: sequelize_1.DataTypes.STRING,
    },
    price: {
        type: sequelize_1.DataTypes.NUMBER,
    },
    stock: {
        type: sequelize_1.DataTypes.NUMBER,
    },
    join_date: {
        type: sequelize_1.DataTypes.DATE,
    },
    status_: {
        type: sequelize_1.DataTypes.TINYINT,
    },
}, {
    createdAt: false,
    updatedAt: false,
    freezeTableName: true,
    timestamps: true,
    sequelize: connection_1.default,
});
exports.default = Product;
