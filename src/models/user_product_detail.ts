import db from "../db/connection";
import { DataTypes } from "sequelize";
import sequelize from "../db/connection";
import User from "./user";
import Product from "./product";

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
      references: { model: User, key: "user_id" },
    },
    product_id: {
      type: DataTypes.STRING,
      references: { model: Product, key: "product_id" },
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
    sequelize,
  }
);

User.belongsToMany(Product, {
  through: UserProductDetail,
  foreignKey: "user_id",
  otherKey: "product_id",
});
Product.belongsToMany(User, {
  through: UserProductDetail,
  foreignKey: "product_id",
  otherKey: "user_id",
});

User.hasMany(UserProductDetail, { foreignKey: "user_id" });
Product.hasMany(UserProductDetail, { foreignKey: "product_id" });
UserProductDetail.belongsTo(Product, { foreignKey: "product_id" });
UserProductDetail.belongsTo(User, { foreignKey: "user_id" });

export default UserProductDetail;
