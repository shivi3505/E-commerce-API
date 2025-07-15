const express = require('express');
const cartRoute = express.Router();

cartRoute.get('/:userId',(req,res)=>{
    console.log(`${req.method} request with cart`);
     console.log(req.params.userId);
     res.send(`Fetching cart for user with ID:${req.params.userId}`)
})
cartRoute.post('/:userId',(req,res)=>{
    console.log(`${req.method} request with cart`);
     console.log(req.params.userId)
    res.send(`Adding product to cart for user with ID: ${req.params.userId}`)
})

module.exports= cartRoute;