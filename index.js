import express from 'express';
import bodyParser from "body-parser";
import categoryRoutes from "./routes/categoryRoutes.js";
import productRoutes from "./routes/productRoutes.js";

const app = express();
app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static('public'));
app.use(bodyParser.json());

app.get("/", (req, res) => {
  res.redirect("/products");
});
app.use("/categories", categoryRoutes);
app.use("/products", productRoutes);

app.listen(3000, () => console.log("Server running on http://localhost:3000"));
