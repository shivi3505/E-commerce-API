const express = require('express');
const app= express();
const users= require('./Router/userRoutes');
const products = require('./Router/productRoutes');
const cart = require('./Router/cartRoutes')
app.use(express.static('public'))
app.use(express.json());
app.use('/users',users);
app.use('/products',products)
app.use('/cart',cart)
// let users = [
//     {id:1,name:"shivani"},
//     {id:2, name:"shruti"}
// ]

// app.use(express.json());
// app.get('/users',(req,res)=>{
//     res.json(users);
// })
// app.get('/users/:id',(req,res)=>{
// const userId= parseInt(req.params.id);
// const user= users.find(u=>u.id===userId);
// if(!user){
//     res.status(404).json({message: "user not found"})
// }
// res.json(user);
// //console.log(userId);
//     //res.json(users);
// })
// app.post('/users',(req,res)=>{
//     const {name}= req.body;
//     const user= {id:users.length+1,name};
//     users.push(user);
//     res.status(201).json(user);
// })
app.use(express.static('public'))
app.use(express.json());
app.use((req,res)=>{
    res.status(404).end(`<h1> error: 404 page not found</h1>`)
    
})
app.listen(3000,()=>{
    console.log('server is running on http://localhost:3000')
})