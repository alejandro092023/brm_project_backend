"use strict";
const { Sequelize } = require("sequelize");
const sequelize = new Sequelize("brm_proyect", "root", "", {
    host: "localhost",
    dialect: "mysql",
});
