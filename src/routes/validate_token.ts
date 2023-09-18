import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";

const validateToken = (req: Request, res: Response, next: NextFunction) => {
  const headerToken = req.headers["authorization"];

  if (headerToken != undefined) {
    try {
      const beareToken = headerToken.slice(7);
      jwt.verify(beareToken, process.env.KEY_JWT || "");
      next();
    } catch (error) {
      res.status(401).json({ msg: "Token invalido" });
    }
  } else {
    res.status(401).json({ msg: "Acceso denegado" });
  }
};

export default validateToken;
