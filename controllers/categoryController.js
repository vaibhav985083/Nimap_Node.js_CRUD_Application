import * as Category from "../models/categoryModel.js";

export const listCategories = async (req, res) => {
    const category = await Category.getAllCategory();
    res.render("category/list", { category });
};

export const addCategory = async (req, res) => {
    if (req.method === "POST") {
        await Category.createCategory(req.body.CategoryName);
        return res.redirect("/category");
    }
    res.render("category/form", { category: {} });
};

export const editCategory = async (req, res) => {
    const id = req.params.id;
    if (req.method === "POST") {
        await Category.updateCategory(CategoryId, req.body.CategoryName);
        return res.redirect("/category");
    }
    const category = await Category.getCategoryById(CategoryId);
    res.render("category/form", { category });
};

export const deleteCategory = async (req, res) => {
    await Category.deleteCategory(req.params.CategoryId);
    res.redirect("/category");
};
