
import express from "express";


import { create, getAll, getDetail, remove, update } from "../controllers/product.js";

const router = express.Router();

router.get("/products", getAll);
 router.get("/products/:id", getDetail);
 router.post("/products", create);
 router.put("/products/:id", update);
 router.delete("/products/:id", remove);

export default router;