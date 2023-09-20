import { Request, Response } from "express";
import UserProductDetail from "../models/user_product_detail";
import Product from "../models/product";

export const shopping = async (req: Request, res: Response) => {
  const { body } = req;
  console.log(body);
  body.items.forEach(async (item: any) => {
    await UserProductDetail.create(item);
  });
  res.json({
    msg: "Producto creado!",
  });
};
