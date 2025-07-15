const productService= require('../services/productService')
const getProducts = productService.getAllProducts;
const getProductById = productService.getProductById

const addProduct= productService.addProduct;
module.exports= {
    getProducts,
    getProductById,
    addProduct
}