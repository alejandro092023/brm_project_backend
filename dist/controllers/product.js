"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteProduct = exports.getProduct = exports.getProducts = exports.putProduct = exports.postProduct = void 0;
const product_1 = __importDefault(require("../models/product"));
const postProduct = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    console.log(req);
    const { body } = req;
    yield product_1.default.create(body);
    res.json({
        msg: "Producto creado!",
    });
});
exports.postProduct = postProduct;
const putProduct = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { body } = req;
    const { id } = req.params;
    try {
        const product = yield product_1.default.findByPk(id);
        if (product) {
            yield product.update(body);
            res.json({
                msg: `Producto actualizado ${id}`,
                body,
            });
        }
        else {
            res.status(404).json({
                msg: `No existe un producto con id ${id}`,
            });
        }
    }
    catch (error) {
        console.log(error);
        res.json({
            msg: "Ocurrio un error",
        });
    }
});
exports.putProduct = putProduct;
const getProducts = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const listProducts = yield product_1.default.findAll({
        where: {
            status_: 1,
        },
    });
    res.json(listProducts);
});
exports.getProducts = getProducts;
const getProduct = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const product = yield product_1.default.findByPk(id);
    if (product) {
        res.json(product);
    }
    else {
        res.status(404).json({
            msg: `No existe un producto con id ${id}`,
        });
    }
});
exports.getProduct = getProduct;
const deleteProduct = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const product = yield product_1.default.findByPk(id);
    console.log(product);
    if (product) {
        yield product.update({ status_: 0 });
        res.json({
            msg: `Producto Eliminado ${id}`,
        });
    }
    else {
        res.status(404).json({
            msg: `No existe un producto con id ${id}`,
        });
    }
});
exports.deleteProduct = deleteProduct;
