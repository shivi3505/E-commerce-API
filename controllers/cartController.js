const cartById= (req,res)=>{
    console.log(`${req.method} request with cart`);
     console.log(req.params.userId);
     res.send(`Fetching cart for user with ID:${req.params.userId}`)
}
const addtoCartByID = (req,res)=>{
    console.log(`${req.method} request with cart`);
     console.log(req.params.userId)
    res.send(`Adding product to cart for user with ID: ${req.params.userId}`)
}

module.exports= {
    cartById,
    addtoCartByID
}