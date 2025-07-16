const path = require('path');
const {errorResponse, serverResponse}=require('../utils/response')
const getAllProducts = (req,res)=>{
    console.log(`${req.method} request with products`);
        res.sendFile(path.join(__dirname,"..","views","products.html"));
       // console.log(path.join(__dirname,"..","views","products.html"));
}
const getProductById = (req,res)=>{
     //console.log(req.params.id);
const id= req.params.id;
try{if(id>40){
    let err= new Error("product not fount");
    err.statusCode= 404;
   // console.log(err);
    throw err;
   //return  errorResponse(res,{message:"product not fount",statusCode:404})
}
return serverResponse(res,id,200)
}
catch(error){
return errorResponse(res,error)
}

    // res.send(`Fetching product with ID:${req.params.id}`)
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