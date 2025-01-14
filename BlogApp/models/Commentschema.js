const mongoose=require("mongoose")
const commentSchema=new mongoose.Schema({
    username:{
        type:String,
        required:true
    },
    comment:{
        type:String,
        required:true
        },
        post:{
            type:mongoose.Schema.Types.ObjectId,
            ref:"postModel",
            required:true
            }
})
module.exports=mongoose.model("commentModel",commentSchema);