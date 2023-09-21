import { Request, Response } from "express";
import Product from "../models/product";
import UserProductDetail from "../models/user_product_detail";
import User from "../models/user";

export const postProduct = async (req: Request, res: Response) => {
  console.log(req);
  const { body } = req;
  await Product.create(body);
  res.json({
    msg: "Producto creado!",
  });
};

export const putProduct = async (req: Request, res: Response) => {
  const { body } = req;
  const { id } = req.params;

  try {
    const product = await Product.findByPk(id);
    if (product) {
      await product.update(body);
      res.json({
        msg: `Producto actualizado ${id}`,
        body,
      });
    } else {
      res.status(404).json({
        msg: `No existe un producto con id ${id}`,
      });
    }
  } catch (error) {
    console.log(error);
    res.json({
      msg: "Ocurrio un error",
    });
  }
};

export const getProducts = async (req: Request, res: Response) => {
  const listProducts = await Product.findAll({
    include: {
      model: UserProductDetail,
      include: {
        model: User,
      },
    },
    where: {
      status_: 1,
    },
  });
  res.json(listProducts);
};

export const getProduct = async (req: Request, res: Response) => {
  const { id } = req.params;
  const product = await Product.findByPk(id);

  if (product) {
    res.json(product);
  } else {
    res.status(404).json({
      msg: `No existe un producto con id ${id}`,
    });
  }
};

export const deleteProduct = async (req: Request, res: Response) => {
  const { id } = req.params;
  const product = await Product.findByPk(id);
  console.log(product);
  if (product) {
    await product.update({ status_: 0 });
    res.json({
      msg: `Producto Eliminado ${id}`,
    });
  } else {
    res.status(404).json({
      msg: `No existe un producto con id ${id}`,
    });
  }
};
