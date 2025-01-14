const likeModel=require("../models/Likeschema")
const postModel=require("../models/Postschema");

exports.likePost=async (req,res)=>{
    try{
        // 1. get data from body
        const {user,post}=req.body
        // check data
        if(!user || !post){
            return res.status(400).json({msg:"Please enter user and post"})
            }
        // add data to db
        const newLike=await new likeModel({user,post}).save()

        // add like id into postmodel
            const updatedpost=await postModel.findByIdAndUpdate({_id:newLike.post},{$push:{"like":newLike._id}},{new:true})
        
        //  return response
        res.status(201).json(
            {
                success:true,
                msg:"Post liked successfully",
                newLike,
                updatedpost
            }
        )

    }
    catch(error){
        console.error(error)
        res.status(500).json({
            success:false,

            msg:"Internal server error"+error.message
        })

    }
}

// dislike
exports.dislikePost=async (req,res)=>{
    try{
        // 1. get data from body
        const {likeid,postid}=req.body
        // check data
        if(!likeid || !postid){
            return res.status(400).json({msg:"Please enter likeid and postid"})
            }
            //delete like from like collection and from post collection
            await likeModel.findByIdAndDelete(likeid)

            const updatedpost=await postModel.findByIdAndUpdate(postid,{$pull:{like:likeid}},
                {new:true}).populate("like").populate("comment").exec()

                // send response
                res.status(200).json({
                    success:true,
                    msg:"Post disliked successfully",
                    updatedpost
                })
    }
    catch(error){
        console.error(error)
        res.status(500).json({
            success:false,
            msg:"Internal server error"+error.message
            })
    }
}