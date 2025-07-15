const express = require('express');
const productRoute = express.Router();

productRoute.get('/',(req,res)=>{
    console.log(`${req.method} request with products`);
    res.send(`Fetching all products`)
})

productRoute.get('/:id',(req,res)=>{
     console.log(req.params.id);
     res.send(`Fetching product with ID:${req.params.id}`)
})
productRoute.post('/',(req,res)=>{
    console.log(`${req.method} request with products`);
    res.send(`Adding a new product`)
})
module.exports= productRoute;