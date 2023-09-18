import db from "../db/connection";
import { DataTypes } from "sequelize";
import UserProductDetail from "./user_product_detail";
import Products from "./product";
import sequelize from "../db/connection";

const Users = db.define(
  "user_",
  {
    user_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    name_: {
      type: DataTypes.STRING,
    },
    email: {
      type: DataTypes.STRING,
    },
    password_: {
      type: DataTypes.STRING,
    },
    user_type_id: {
      type: DataTypes.NUMBER,
    },
    status_: {
      type: DataTypes.TINYINT,
    },
  },
  {
    createdAt: false,
    updatedAt: false,
    freezeTableName: true,
    timestamps: true,
  }
);

// Users.belongsToMany(Products, {
//   through: UserProductDetail,
//   foreignKey: "user_id",
// });

export default Users;
