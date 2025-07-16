const submitHandler= (e)=>{
    e.preventDefault();
    //console.log("submit handler")
    const urlAPI = "http://localhost:3000"+"/products/"
    const productName= document.getElementById('product').value;
    console.log(productName);
    const addProduct = {"productName": productName};
axios.post(urlAPI,addProduct)
.then((result)=>{
    console.log(result.data);
})
}
