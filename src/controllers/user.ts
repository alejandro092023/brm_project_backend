import { Request, Response } from "express";
import Users from "../models/user";
import Products from "../models/product";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

// export const getUsers = async (req: Request, res: Response) => {
//   try {
//     const usuariosConProductos = await Users.findAll({
//       include: "Products", // Nombre de la asociación
//     });

//     res.json(usuariosConProductos);
//   } catch (error) {
//     console.error("Error al obtener productos de usuarios:", error);
//     res
//       .status(500)
//       .json({ error: "Ocurrió un error al obtener los datos. " + error });
//   }
// };

export const register = async (req: Request, res: Response) => {
  const { name_, password_, email } = req.body;
  const hashPassword = await bcrypt.hash(password_, 10);

  try {
    const userFind = await Users.findOne({ where: { name_: name_ } });

    if (userFind) {
      return res.status(400).json({ msg: "Ya existe el usuario" });
    }

    await Users.create({
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
  const userFind = await Users.findOne({ where: { name_: name_ } });

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
