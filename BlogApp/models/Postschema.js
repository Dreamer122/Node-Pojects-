const mongoose=require("mongoose")
const postSchema=new mongoose.Schema({
    title:{
        type:String,
        required:true
    },
    body:{
        type:String,
        required:true
    },
    like:[
        {
            type:mongoose.Schema.Types.ObjectId,
            ref:"likeModel"
        }
    ],
    comment:[
        {
            type:mongoose.Schema.Types.ObjectId,
            ref:"commentModel"
        }

    ],
    createdAt:{
        type:Date,
        default:Date.now()
    },
    updatedAt:{
        type:Date,
        default:Date.now()
    }


})
module.exports=mongoose.model("postModel",postSchema)