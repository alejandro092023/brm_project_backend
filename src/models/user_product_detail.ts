import db from "../db/connection";
import { DataTypes } from "sequelize";

const UserProductDetail = db.define(
  "user_product_detail",
  {
    user_product_detail_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    user_id: {
      type: DataTypes.INTEGER,
    },
    product_id: {
      type: DataTypes.STRING,
    },
    quantity: {
      type: DataTypes.INTEGER,
    },
    date_shopping: {
      type: DataTypes.INTEGER,
    },
  },
  {
    createdAt: false,
    updatedAt: false,
    freezeTableName: true,
    timestamps: true,
  }
);

UserProductDetail.init({
  userId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: { model: "User", key: "user_id" },
  },
  productId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: { model: "Products", key: "product_id" },
  },
});

export default UserProductDetail;
