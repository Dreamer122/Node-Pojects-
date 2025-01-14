const mongoose=require("mongoose")
const employeeSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true

    },
    email:{
        type:String,
        required:true

    },
    phone:{
        type:String,
        required:true
    },
    designation:{
        type:String,
        required:true
        },
        salary:{
            type:Number,
            required:true
        },

        image:{
            type:String,
            required:true
        }


})
module.exports=mongoose.model("EmployeeModel",employeeSchema);       