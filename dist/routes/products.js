"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const validate_token_1 = __importDefault(require("./validate_token"));
const product_1 = require("../controllers/product");
const router = (0, express_1.Router)();
router.post("/", product_1.postProduct);
router.put("/:id", product_1.putProduct);
router.get("/", validate_token_1.default, product_1.getProducts);
router.get("/:id", product_1.getProduct);
router.put("/delete/:id", product_1.deleteProduct);
exports.default = router;
