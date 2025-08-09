# Nimap_Node.js_CRUD_Application

A full-stack **Node.js** application with **MySQL** as the database and **EJS** as the view engine.  
Implements CRUD (Create, Read, Update, Delete) operations for:

- **Category Master**
- **Product Master** (with category selection)

1. HTML Page - Category Master with CRUD operations
2. HTML Page - Product Master with CRUD operations. A product belongs to a category.
3. The product list should also display ProductId, ProductName, CategoryName, CategoryId.

The product list should have pagination on the server side, which means extract records from DB as per the page size on the view.

So if the page size is 10 and the user is on page 9 then pull only records from 90 - 100.

