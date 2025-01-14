const EmployeeModel=require("../models/Employeemodel")

exports.getAllEmployee=async(req,res)=>{
    try{
        const employee=await EmployeeModel.find()
        res.status(200).json({
           success:true,
            data:employee
        })

    }
    catch(error){
        res.status(400).json({
            success:false,
            message:error.message+"error occcured while fetching all emp data"
        })

    }
}
// find single emp

exports.getSingleEmployee=async(req,res)=>{
    try{
            const {id}=req.params
            // validation
            if(!id){
               return res.status(400).json({
                    success:false,
                    message:"id is required"
                })
            }

            const employee=await EmployeeModel.findById(id)
            
            // validation
            if(!employee){
              return  res.status(404).json({
                    success:false,
                    message:"employee not found"
                })
            }
               return res.status(200).json({
                    success:true,
                    data:employee,
                    message:"employee found"
                })
    }

    catch(error){
        res.status(400).json({
            sucsess:false,
            message:error.message+"error occcured while fetching single emp data"
        })
    }
}