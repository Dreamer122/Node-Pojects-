const postModel=require("../models/Postschema")

exports.addPost=async(req,res)=>{
    try{
        const {title,body}=req.body

        // validation
        if(!title || !body){
            return res.status(400).json({
                error:"Please fill all fields"
            })
            }

            // add data in database
            const newpost= await new postModel({title,body}).save()

            res.status(201).json({
                success:true,
                message:"Post added successfully",
                post:newpost
            })

    }
    catch(error){
        console.log(error)
        res.status(500).json({
            message:error.message,
            error:"Internal server error"
            })
    }

}

// getall blogs
exports.getAllPosts=async(req,res)=>{
    try{
        const allpost=await postModel.find({}).populate("like").populate("comment").exec();
        res.status(200).json({
            success:true,
            message:"All posts fetched successfully",
            post:allpost
            })

    }
    catch(error){
        console.log(error)
        res.status(500).json({
            message:error.message,
            error:"Internal server error"
            })
    }
}

