import { Router } from "express";
import { getUsersProducts, login, register } from "../controllers/user";

const router = Router();

router.get("/products", getUsersProducts);
router.post("/", register);
router.post("/login", login);

export default router;
