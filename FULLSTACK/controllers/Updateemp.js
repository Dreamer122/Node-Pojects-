const EmployeeModel=require("../models/Employeemodel")

exports.updateEmployee=async(req,res)=>{
    try{
        const {id,name,email,phone,salary,designation}=req.body
// validation
if(!id){
    return res.status(400).json({
        success:false,
        message:"Please enter employee id"
    })
}

    // update employee data
    const updatedEmployee=await EmployeeModel.findByIdAndUpdate(id,{name,email,phone,designation,salary}
        ,{new:true})

        return res.status(200).json({
            success:true,
            message:"Employee updated successfully",
            data:updatedEmployee
        })

    }
    catch(error){
        console.log(error)
        return res.status(500).json({
            success:false,
            message:"Internal server error"
            
        })
        
    }
}