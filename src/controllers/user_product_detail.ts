import { Request, Response } from "express";
import UserProductDetail from "../models/user_product_detail";
import Product from "../models/product";

export const shopping = async (req: Request, res: Response) => {
  const { body } = req;
  body.items.forEach(async (item: any) => {
    await UserProductDetail.create(item);
  });
  body.items.forEach(async (item: any) => {
    const product = await Product.findByPk(item.product_id);
    await product.update({ stock: product.stock - item.quantity });
  });
  res.json({
    msg: "Producto creado!",
  });
};
