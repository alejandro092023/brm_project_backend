import db from "../db/connection";
import { DataTypes } from "sequelize";
import Users from "./user";
import UserProductDetail from "./user_product_detail";
import sequelize from "../db/connection";

const Products = db.define(
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
  }
);

// Products.belongsToMany(Users, {
//   through: UserProductDetail,
//   foreignKey: "product_id",
// });

export default Products;
