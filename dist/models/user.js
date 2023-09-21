"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const connection_1 = __importDefault(require("../db/connection"));
const sequelize_1 = require("sequelize");
const connection_2 = __importDefault(require("../db/connection"));
const User = connection_1.default.define("user_", {
    user_id: {
        type: sequelize_1.DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    name_: {
        type: sequelize_1.DataTypes.STRING,
    },
    email: {
        type: sequelize_1.DataTypes.STRING,
    },
    password_: {
        type: sequelize_1.DataTypes.STRING,
    },
    user_type_id: {
        type: sequelize_1.DataTypes.NUMBER,
    },
    status_: {
        type: sequelize_1.DataTypes.TINYINT,
    },
}, {
    createdAt: false,
    updatedAt: false,
    freezeTableName: true,
    timestamps: true,
    sequelize: connection_2.default,
});
// User.belongsToMany(Product, {
//   through: UserProductDetail,
//   foreignKey: "user_id",
//   otherKey: "product_id",
// });
// User.hasMany(UserProductDetail, { foreignKey: "user_id" });
// UserProductDetail.belongsTo(Product, { foreignKey: "product_id" });
exports.default = User;
