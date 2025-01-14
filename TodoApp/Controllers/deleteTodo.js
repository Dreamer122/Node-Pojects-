const todoModel=require("../Models/TODO")

exports.deleteTodo=async (req,res)=>{
try{
    const {id}=req.body
    if(!id){
        return res.status(400).json({message:"Invalid id"+id})
    }
    const todo=await todoModel.findByIdAndDelete(id)

    res.status(200).json({
        message:"Todo deleted successfully",
        data:todo
    })


}
catch(error){
    res.status(500).json({
        success:false,
        message:"error occured while deleting a todo"+error.message

    })
}
}