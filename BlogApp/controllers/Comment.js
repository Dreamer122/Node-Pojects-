const postModel=require("../models/Postschema")
const commentModel=require("../models/Commentschema")

exports.commentPost=async(req,res)=>{
    try{
        const {username,comment}=req.body
        const postid=req.params.id

        //validation
        // add data to db
        const newComment=await new commentModel({username,comment,post:postid}).save()

        // update post model
        const post=await postModel.findByIdAndUpdate(postid,{$push:{comment:newComment._id}},{new:true})

        // retur response
        res.status(201).json({
            status:"success",
            message:"comment added successfully",
            post,newComment
        })
    }
    catch(error){
        res.status(500).json({
            success:false,
            message:error.message+"internal server error",

        })
    }
}

// delete comment
exports.deleteComment=async(req,res)=>{
    try{
        const {postid,commentid}=req.body;
        // delete comment from comment collection
        const comment=await commentModel.findByIdAndDelete(commentid);
        // delete comment from post collection
        const updatedpost=await postModel.findByIdAndUpdate(postid,{$pull:{comment:commentid}},{new:true})

        res.status(200).json({
            status:"success",
            message:"comment deleted successfully",
            updatedpost
            })
    }
    catch(error){
        res.status(500).json({
            success:false,
            message:error.message+"internal server error",
            })

    }
}