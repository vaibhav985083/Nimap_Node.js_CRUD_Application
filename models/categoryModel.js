import db from "../config/db.js";

export const getAllCategory = async () => {
    const [rows] = await db.query("select * from category");
    return rows;
};

export const getCategoryById = async (id) => {
    const [rows] = await db.query("select * from category where id = ?", [CategoryId]);
    return rows[0];
};

export const createCategory = async (CategoryName) => {
   const[result]= await db.query("insert into category (CategoryName) values (?)", [CategoryName]);
   return result;
};

export const updateCategory = async (id, name) => {
    await db.query("update category set CategoryName = ? where CategoryId = ?", [CategoryName, CategoryId]);
};

export const deleteCategory = async (id) => {
    await db.query("delete from category where CategoryId = ?", [CategoryId]);
};
