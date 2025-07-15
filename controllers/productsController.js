const getProducts = (req,res)=>{
    console.log(`${req.method} request with products`);
    res.send(`Fetching all products`)
}
const getProductById = (req,res)=>{
     console.log(req.params.id);
     res.send(`Fetching product with ID:${req.params.id}`)
}

const addProduct=(req,res)=>{
    console.log(`${req.method} request with products`);
    res.send(`Adding a new product`)
}
module.exports= {
    getProducts,
    getProductById,
    addProduct
}