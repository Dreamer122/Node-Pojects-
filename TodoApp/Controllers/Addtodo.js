
const todoModel=require("../Models/TODO")

exports.addTodo=async(req,res)=>{
    try{

    // fetch data from request
    const {textData}=req.body
    // const textData=req.body.textData
    console.log("req=",req.body)
    // validation

    if(!textData){
        return res.status(400).json({
            success:false,
            message:"please enter text"
        })
    }
    // insert data into database
    const tododoc=await todoModel.create({textData});
    // response send
    return res.status(201).json({
        success:true,
        message:"todo added successfully",
        data:tododoc
    })
}
catch(error){
    console.log(error)
    return res.status(500).json({
        success:false,
        message:"server error"+error.message
    })

}
}

