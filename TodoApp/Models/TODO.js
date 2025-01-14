const mongoose=require("mongoose")

const todoSchema=new mongoose.Schema({
    textData:{type:String,
        required:true,
        maxLength:100},

    createdAt:{type:Date,
        required:true,
        default:Date.now()},

    updatedAt:{
        type:Date,
        required:true,
        default:Date.now()
    }
})
module.exports=mongoose.model("todoModel",todoSchema)