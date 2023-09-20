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
exports.login = exports.register = exports.getUsersProducts = void 0;
const user_1 = __importDefault(require("../models/user"));
const product_1 = __importDefault(require("../models/product"));
const user_product_detail_1 = __importDefault(require("../models/user_product_detail"));
const bcrypt_1 = __importDefault(require("bcrypt"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const sequelize_1 = require("sequelize");
const getUsersProducts = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const userProducts = yield user_1.default.findAll({
            include: {
                model: product_1.default,
                through: user_product_detail_1.default,
            },
            where: {
                "$products.product_id$": { [sequelize_1.Op.not]: null },
            },
        });
        res.json(userProducts);
    }
    catch (error) {
        console.error("Error al obtener productos de usuarios:", error);
        res
            .status(500)
            .json({ error: "Ocurrió un error al obtener los datos. " + error });
    }
});
exports.getUsersProducts = getUsersProducts;
const register = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { name_, password_, email } = req.body;
    const hashPassword = yield bcrypt_1.default.hash(password_, 10);
    try {
        const userFind = yield user_1.default.findOne({ where: { name_: name_ } });
        if (userFind) {
            return res.status(400).json({ msg: "Ya existe el usuario" });
        }
        yield user_1.default.create({
            name_: name_,
            password_: hashPassword,
            email: email,
        });
        res.json({
            msg: "Usuario creado " + name_,
        });
    }
    catch (error) {
        res.status(400).json({
            msg: "Ocurrio un error",
            error,
        });
    }
});
exports.register = register;
const login = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { name_, password_ } = req.body;
    const userFind = yield user_1.default.findOne({ where: { name_: name_ } });
    if (!userFind) {
        return res.status(404).json({
            msg: "No existe el usuario " + name_,
        });
    }
    const passwordValid = yield bcrypt_1.default.compare(password_, userFind.password_);
    if (!passwordValid) {
        return res.status(400).json({ msg: "Password incorrecta" });
    }
    const token = jsonwebtoken_1.default.sign({
        name: name_,
    }, process.env.KEY_JWT || "");
    res.json({ token, body: userFind });
});
exports.login = login;
