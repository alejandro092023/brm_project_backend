import db from "../db/connection";
import { DataTypes } from "sequelize";
import UserProductDetail from "./user_product_detail";
import Product from "./product";
import sequelize from "../db/connection";

const User = db.define(
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
    sequelize,
  }
);

User.belongsToMany(Product, {
  through: UserProductDetail,
  foreignKey: "user_id",
  otherKey: "product_id",
});

export default User;
