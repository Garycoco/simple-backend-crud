const express = require("express");
const router = express.Router();
const { getAllProducts, getProductById, saveProduct, removeProduct,updateProduct } = require("../controllers/product.controller.js")

router.get("/", getAllProducts);
router.get("/:id", getProductById);
router.post("/", saveProduct);
router.put("/:id", updateProduct);
router.delete("/:id", removeProduct);

module.exports = router;