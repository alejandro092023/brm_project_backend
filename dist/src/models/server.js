"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const products_1 = __importDefault(require("../../routes/products"));
class Server {
    constructor() {
        this.app = (0, express_1.default)();
        this.port = process.env.PORT || "3001";
        this.listen();
        this.routes();
    }
    listen() {
        this.app.listen(this.port, () => {
            console.log(`Corriendo en el puerto  ${this.port}`);
        });
    }
    routes() {
        this.app.get("/", (req, res) => {
            res.json({
                msg: "API working",
            });
        });
        this.app.use("/api/products", products_1.default);
    }
}
exports.default = Server;
