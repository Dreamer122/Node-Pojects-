const todoModel=require("../Models/TODO")

exports.updateTodo=async(req,res)=>{
    try{

        const{id,textData}=req.body
        // validation
        if(!textData){
            return res.status(400).json({
                success:false,
                message:"Please enter the todo data"
            })
        }
        const updatedtodo=await todoModel.findByIdAndUpdate(id,
            {textData:textData,updatedAt:Date.now()},
            {new:true});

        res.status(200).json({
            success:true,
            message:"Todo updated successfully",
            data:updatedtodo
        })

    }
    catch(error){
        res.status(500).json({message:error.message})

    }
}