import { Request, Response } from "express";
import Menu from "../models/menu";

export const getMenu = async (req: Request, res: Response) => {
  const listMenu = await Menu.findAll({
    where: {
      status_: 1,
    },
  });
  res.json(listMenu);
};
