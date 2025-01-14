const EmployeeModel=require("../models/Employeemodel")

exports.createEmployee=async(req,res)=>{
    try{
        const {name,email,phone,designation,salary}=req.body
        //validation
        if(!name||!email||!phone||!designation||!salary){
            return res.status(400).json({
                success:false,
                message:"Please fill all the fields"
            })
            }
            const newemployee=await EmployeeModel.create({
                name,
                email,
                phone,
                designation,
                salary,
                image:`https://api.dicebear.com/9.x/initials/svg?seed=${name}`
            })

            res.status(201).json({
                success:true,
                message:"Employee created successfully",
                data:newemployee
            })


    }
    catch(error){
        console.log(error)
        res.status(500).json({
            success:false,
            message:"Internal Server Error",
            error:error.message
        })
    }
}