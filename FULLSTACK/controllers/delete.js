const EmployeeModel=require("../models/Employeemodel")

exports.deleteEmployee=async(req,res)=>{
    try{
        const {id}=req.body
// validation
if(!id){
    return res.status(400).json({
        success:false,
        message:"Please enter employee id"
    })
}

    // delete employee
    const employee=await EmployeeModel.findByIdAndDelete(id)

        return res.status(200).json({
            success:true,
            message:"Employee deleted successfully",
            data:employee
        })

    }
    catch(error){
        console.log(error)
        return res.status(500).json({
            success:false,
            message:"Internal server error"+error.message
            
        })
        
    }
}