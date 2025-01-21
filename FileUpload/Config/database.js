const mongoose=require("mongoose");
require("dotenv").config();
exports.connect=()=>{
    mongoose.connect(process.env.DATABASE_URL,{
        useNewUrlParser:true,
        useUnifiedTopology:true
        })
        .then(()=>console.log("Connected to MongoDB"))
        .catch((error)=>{
            console.log("Error connecting to MongoDB");
            console.log(error)
            process.exit(1)
        })
}