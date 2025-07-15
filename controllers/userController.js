const getUsers = (req,res)=>{
    console.log(`${req.method} request for user`)
    res.send(`Fetching all users`)
}
const getUserById= (req,res)=>{
    const {id} = req.params;
   console.log(`${req.method} request for user`)
   console.log(id);
    res.send(`Fetching user with ID: ${id}`)
} 
const addUser = (req,res)=>{
     console.log(`${req.method} request for user`)
         res.send(`Adding a new user`)
}
module.exports ={
    getUsers,
    getUserById,
    addUser
}