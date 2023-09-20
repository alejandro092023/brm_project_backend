import { DataTypes } from "sequelize";
import sequelize from "../db/connection";
import UserProductDetail from "./user_product_detail";
import User from "./user";

const Product = sequelize.define(
  "product",
  {
    product_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    name_: {
      type: DataTypes.STRING,
    },
    set_: {
      type: DataTypes.STRING,
    },
    price: {
      type: DataTypes.NUMBER,
    },
    stock: {
      type: DataTypes.NUMBER,
    },
    join_date: {
      type: DataTypes.DATE,
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

export default Product;
