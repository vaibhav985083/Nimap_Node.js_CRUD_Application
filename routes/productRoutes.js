import express from "express";
import * as productController from "../controllers/productController.js";

const router = express.Router();

router.get("/", productController.listProducts);
router.get("/add", productController.addProduct);
router.post("/add", productController.addProduct);
router.get("/edit/:id", productController.editProduct);
router.post("/edit/:id", productController.editProduct);
router.get("/delete/:id", productController.deleteProduct);

export default router;
