const express = require("express");

const routes = express.Router();

const ProductsControllers = require("../controllers/productControllers");

routes.get("/", ProductsControllers.getProducts);
routes.get("/:id", ProductsControllers.getProductById);

module.exports = routes;
