const path = require('path');
const getAllProducts = (req,res)=>{
    console.log(`${req.method} request with products`);
        res.sendFile(path.join(__dirname,"..","views","products.html"));
       // console.log(path.join(__dirname,"..","views","products.html"));
}
const getProductById = (req,res)=>{
     console.log(req.params.id);
     res.send(`Fetching product with ID:${req.params.id}`)
}
const addProduct=(req,res)=>{
    console.log(`${req.method} request with products`);
    // res.send(`Adding a new product`)
    const data= req.body;
    console.log(data);
    res.status(200).json({value:data.productName});
    
}

module.exports={
    getAllProducts,
    getProductById,
    addProduct
}