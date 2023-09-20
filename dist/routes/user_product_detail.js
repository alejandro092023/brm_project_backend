"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const user_product_detail_1 = require("../controllers/user_product_detail");
const router = (0, express_1.Router)();
router.post("/", user_product_detail_1.shopping);
exports.default = router;
