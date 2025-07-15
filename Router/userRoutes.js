const express = require('express');
const userRoute = express.Router();

userRoute.get('/',(req,res)=>{
    console.log(`${req.method} request for user`)
    res.send(`Fetching all users`)
})

userRoute.post('/',(req,res)=>{
     console.log(`${req.method} request for user`)
    res.send(`Adding a new user`)
})
userRoute.get('/:id',(req,res)=>{
    console.log(req.params.id);
    res.send(`Fetching user with ID: ${req.params.id}`)
})

module.exports= userRoute;