
const todoModel=require("../Models/TODO")

exports.allTodo=async(req,res)=>{
    try{
        const alltodo=await todoModel.find({});
        res.status(200).json({
            status:"success",
            message:"fetched all todo successfully",
            data:alltodo
        })

    }
    catch(error){
        console.log(error)
        res.status(500).json({
            status:false,
            message:"failed to fetch all todo"+error.message,
        })

    }

}