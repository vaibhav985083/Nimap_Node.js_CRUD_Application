import * as Product from "../models/productModel.js";

export const listProducts = async (req, res) => {
    let page = parseInt(req.query.page) || 1;
    let limit = 10;
    let offset = (page - 1) * limit;

    const products = await Product.getPaginatedProducts(limit, offset);
    const totalCount = await Product.getProductCount();
    const totalPages = Math.ceil(totalCount / limit);

    res.render("product/list", { products, page, totalPages });
};

export const addProduct = async (req, res) => {
    const categories = await Product.getAllCategories();
    if (req.method === "POST") {
        await Product.createProduct(req.body.name, req.body.category_id);
        return res.redirect("/products");
    }
    res.render("product/form", { product: {}, categories });
};

export const editProduct = async (req, res) => {
    const id = req.params.id;
    const categories = await Product.getAllCategories();
    if (req.method === "POST") {
        await Product.updateProduct(id, req.body.name, req.body.category_id);
        return res.redirect("/products");
    }
    const product = await Product.getProductById(id);
    res.render("product/form", { product, categories });
};

export const deleteProduct = async (req, res) => {
    await Product.deleteProduct(req.params.id);
    res.redirect("/products");
};
