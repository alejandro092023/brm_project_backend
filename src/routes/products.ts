import { Router } from "express";
import validateToken from "./validate_token";
import {
  deleteProduct,
  getProduct,
  getProducts,
  postProduct,
  putProduct,
} from "../controllers/product";

const router = Router();

router.post("/", postProduct);
router.put("/:id", putProduct);
router.get("/", validateToken, getProducts);
router.get("/:id", getProduct);
router.put("/delete/:id", deleteProduct);

export default router;
