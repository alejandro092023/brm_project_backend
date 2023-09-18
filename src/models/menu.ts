import db from "../db/connection";
import { DataTypes } from "sequelize";

const Menu = db.define(
  "menu",
  {
    menu_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    name_: {
      type: DataTypes.STRING,
    },
    router_link: {
      type: DataTypes.STRING,
    },
    type_: {
      type: DataTypes.STRING,
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

export default Menu;
