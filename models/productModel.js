import db from "../config/db.js";

export const getPaginatedProducts = async (limit, offset) => {
    const [rows] = await db.query(
        `SELECT p.ProductId AS ProductId, p.ProductName AS ProductName, 
        c.CategoryId AS CategoryId, c.CategoryName AS CategoryName
        FROM products p JOIN category c ON p.ProductId = c.CategoryId
        LIMIT ? OFFSET ?`, 
        [limit, offset]
    );
    return rows;
};

export const getProductCount = async () => {
    const [rows] = await db.query("select count(*) as count from products");
    return rows[0].count;
};

export const getAllCategories = async () => {
    const [rows] = await db.query("select * from  category");
    return rows;
};

export const getProductById = async (id) => {
    const [rows] = await db.query("select * from products where id = ?", [ProductId]);
    return rows[0];
};

export const createProduct = async (name, categoryId) => {
    await db.query("insert into products (ProductName, CategoryId) values (?, ?)", [ProductName, CategoryId]);
};

export const updateProduct = async (id, name, categoryId) => {
    await db.query("update products set name = ?, CategoryId = ? where id = ?", [ProductName, CategoryId, ProductId]);
};

export const deleteProduct = async (id) => {
    await db.query("delete from products where id = ?", [ProductId]);
};
