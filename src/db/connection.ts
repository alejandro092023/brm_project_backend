const { Sequelize } = require("sequelize");

const sequelize = new Sequelize("brm_project", "root", "", {
  host: "localhost",
  dialect: "mysql",
});

export default sequelize;
