const express = require('express');
const cartRoute = express.Router();
const cartController= require('../controllers/cartController')
cartRoute.get('/:userId',cartController.cartById)
cartRoute.post('/:userId',cartController.addtoCartByID)

module.exports= cartRoute;