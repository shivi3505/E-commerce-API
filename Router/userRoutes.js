const express = require('express');
const userRoute = express.Router();
const userController= require('../controllers/userController')
userRoute.get('/',userController.getUsers)

userRoute.post('/',userController.addUser)
userRoute.get('/:id',userController.getUserById)

module.exports= userRoute;