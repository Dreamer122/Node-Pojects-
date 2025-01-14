const mongoose=require("mongoose")
 const likeSchema=new mongoose.Schema({
    user:{
        type:String,
        required:true
    },
    post:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"postModel"
    }
 })
 module.exports=mongoose.model("likeModel",likeSchema);