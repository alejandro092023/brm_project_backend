"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const connection_1 = __importDefault(require("../db/connection"));
const sequelize_1 = require("sequelize");
const connection_2 = __importDefault(require("../db/connection"));
const user_1 = __importDefault(require("./user"));
const product_1 = __importDefault(require("./product"));
const UserProductDetail = connection_1.default.define("user_product_detail", {
    user_product_detail_id: {
        type: sequelize_1.DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    user_id: {
        type: sequelize_1.DataTypes.INTEGER,
        references: { model: user_1.default, key: "user_id" },
    },
    product_id: {
        type: sequelize_1.DataTypes.STRING,
        references: { model: product_1.default, key: "product_id" },
    },
    quantity: {
        type: sequelize_1.DataTypes.INTEGER,
    },
    date_shopping: {
        type: sequelize_1.DataTypes.INTEGER,
    },
}, {
    createdAt: false,
    updatedAt: false,
    freezeTableName: true,
    timestamps: true,
    sequelize: connection_2.default,
});
exports.default = UserProductDetail;
