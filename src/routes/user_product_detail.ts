import { Router } from "express";
import { getUserProduct } from "../controllers/user_product_detail";

const router = Router();

router.get("/", getUserProduct);

export default router;
