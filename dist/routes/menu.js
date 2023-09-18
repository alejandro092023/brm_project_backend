"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const menu_1 = require("../controllers/menu");
const router = (0, express_1.Router)();
router.get("/", menu_1.getMenu);
exports.default = router;
