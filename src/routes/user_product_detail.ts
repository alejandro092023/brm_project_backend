import { Router } from "express";
import { shopping } from "../controllers/user_product_detail";

const router = Router();

router.post("/", shopping);

export default router;
