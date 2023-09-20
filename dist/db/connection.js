"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const { Sequelize } = require("sequelize");
const sequelize = new Sequelize("brm_project", "root", "", {
    host: "localhost",
    dialect: "mysql",
});
exports.default = sequelize;
