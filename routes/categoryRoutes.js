import express from "express";
import * as categoryController from "../controllers/categoryController.js";

const router = express.Router();

router.get("/", categoryController.listCategories);
router.get("/add", categoryController.addCategory);
router.post("/add", categoryController.addCategory);
router.get("/edit/:id", categoryController.editCategory);
router.post("/edit/:id", categoryController.editCategory);
router.get("/delete/:id", categoryController.deleteCategory);

export default router;
