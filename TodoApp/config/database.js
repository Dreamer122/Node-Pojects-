const mongoose=require("mongoose")

require("dotenv").config()

const databaseConnect=()=>{
    mongoose.connect(process.env.DATABASE_URL,{
        useNewUrlParser:true,
        useUnifiedTopology:true
    })
    .then(()=>{console.log("database connected successfully")})
    .catch((error)=>{
        console.log("connection me error aa gya",error)
    })
}
module.exports=databaseConnect