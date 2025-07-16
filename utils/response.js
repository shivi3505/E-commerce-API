const errorResponse=(res,err)=>{
    const message= err.message;
    const statusCode = err.statusCode;
    console.log(statusCode);
    return res.status(statusCode)
    .json({
        message: message,
        status: false
    })
}

const serverResponse= (res,data,statusCode)=>{
return res.status(statusCode).json({
    data: data,
    status: true
})
}

module.exports={
    errorResponse,
    serverResponse
}