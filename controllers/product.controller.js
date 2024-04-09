const productModel = require('../models/product.js')

// Save product
const saveProduct = async (req, res) => {
    try {
        const product = await productModel.create(req.body);
        res.status(200).json(product);
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}
// Get all Products
const getAllProducts = async (req, res) => {
    try {
        const products = await productModel.find({}) // retrieves all the products
        res.status(200).json(products)
    } catch (error) {
        req.status(500).json({ message: error.message })
    }
}
// Get product by ID
const getProductById = async (req, res) => {
    try {
        const { id } = req.params;
        const product = await productModel.findById(id);
        res.status(200).json(product);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}
// Update product by ID
const updateProduct = async(req, res) => {
    try {
        const { id } = req.params;
        const product = await productModel.findByIdAndUpdate(id, req.body);
        if(!product) {
            return res.status(404).json({ message: `Product with id ${id} does not exist` })
        }
        const updatedProduct = await productModel.findById(id);
        res.status(200).json(updatedProduct);
    } catch(error) {
        res.status(500).json({ message: error.message })
    }
}
// Delete product by id
const removeProduct = async (req, res) => {
    try {
        const { id } = req.params;
        const product = await productModel.findByIdAndDelete(id);
        if (!product) {
            return res.status(404).json({ message: `Product with id ${id} does not exist!` })
        }
        res.status(200).json({ message: "Product deleted successfully" });
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}
module.exports = { 
    getAllProducts,
    saveProduct,
    updateProduct,
    removeProduct,
    getProductById
}