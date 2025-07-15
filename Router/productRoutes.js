const express = require('express');
const productRoute = express.Router();
const productController= require('../controllers/productsController')
productRoute.get('/',productController.getProducts)

productRoute.get('/:id',productController.getProductById)
productRoute.post('/',productController.addProduct)
module.exports= productRoute;