import express, { Application, Request, Response } from "express";
import routesProducts from "../routes/products";
import routesMenu from "../routes/menu";
import routesUsers from "../routes/users";
import routesUserProduct from "../routes/user_product_detail";
import db from "../db/connection";
import cors from "cors";

class Server {
  private app: Application;
  private port: string;

  constructor() {
    this.app = express();
    this.port = process.env.PORT || "3001";
    this.listen();
    this.midlewares();
    this.dbConnect();
    this.routes();
  }

  listen() {
    this.app.listen(this.port, () => {
      console.log(`Corriendo en el puerto  ${this.port}`);
    });
  }

  routes() {
    this.app.get("/", (req: Request, res: Response) => {
      res.json({
        msg: "API working",
      });
    });
    this.app.use("/api/products", routesProducts);
    this.app.use("/api/menu", routesMenu);
    this.app.use("/api/users", routesUsers);
    this.app.use("/api/user-product", routesUserProduct);
  }

  midlewares() {
    this.app.use(express.json());
    this.app.use(cors());
  }

  async dbConnect() {
    await db.authenticate();
    console.log("Conectado a la base de datos");
  }
}

export default Server;
