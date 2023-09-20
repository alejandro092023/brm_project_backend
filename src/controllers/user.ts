import { Request, Response } from "express";
import User from "../models/user";
import Product from "../models/product";
import UserProductDetail from "../models/user_product_detail";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { Op } from "sequelize";

export const getUsersProducts = async (req: Request, res: Response) => {
  try {
    const userProducts = await User.findAll({
      include: {
        model: UserProductDetail,
        include: {
          model: Product,
        },
      },
      where: {
        "$user_product_details.product_id$": { [Op.not]: null },
      },
    });

    res.json(userProducts);
  } catch (error) {
    console.error("Error al obtener productos de usuarios:", error);
    res
      .status(500)
      .json({ error: "Ocurrió un error al obtener los datos. " + error });
  }
};

export const register = async (req: Request, res: Response) => {
  const { name_, password_, email } = req.body;
  const hashPassword = await bcrypt.hash(password_, 10);

  try {
    const userFind = await User.findOne({ where: { name_: name_ } });

    if (userFind) {
      return res.status(400).json({ msg: "Ya existe el usuario" });
    }

    await User.create({
      name_: name_,
      password_: hashPassword,
      email: email,
    });

    res.json({
      msg: "Usuario creado " + name_,
    });
  } catch (error) {
    res.status(400).json({
      msg: "Ocurrio un error",
      error,
    });
  }
};

export const login = async (req: Request, res: Response) => {
  const { name_, password_ } = req.body;
  const userFind = await User.findOne({ where: { name_: name_ } });

  if (!userFind) {
    return res.status(404).json({
      msg: "No existe el usuario " + name_,
    });
  }

  const passwordValid = await bcrypt.compare(password_, userFind.password_);

  if (!passwordValid) {
    return res.status(400).json({ msg: "Password incorrecta" });
  }

  const token = jwt.sign(
    {
      name: name_,
    },
    process.env.KEY_JWT || ""
  );

  res.json({ token, body: userFind });
};
