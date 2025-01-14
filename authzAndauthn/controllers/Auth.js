const authModel=require("../Models/Auth")
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

exports.Signup=async(req,res)=>{
    try{
        //  get data form req
        const {username,email,password,role}=req.body
        // validation
        if(!username || !email || !password || !role){
            return res.status(400).json({msg:"Please fill all fields"})
            }

            // check if user already exist
            const userExist=await authModel.findOne({email:email})
            if(userExist){
                return res.status(400).json({msg:"User already exist"})
            }
            // hash password
            const hashedpassword = await bcrypt.hash(password,10);
            console.log(hashedpassword)
            // create new user
            const newUser= await new authModel({username:username,email,role,password:hashedpassword}).save()

            res.status(201).json({
                success:true,
                msg:"User created successfully",
                user:newUser

            })
            

    }
    catch(error){
        console.log(error)
        res.status(500).json({
            msg:"Internal server error"+error.message,
            success:false,

        })

    }
}

// login function 
exports.login=async (req,res)=>{
    try{
        // get data from req
        const {email,password}=req.body;
        // validation
        if(!email || !password){
            return res.status(400).json({msg:"Please fill all fields"})
            }
            // check if user exist
            let userExist=await authModel.findOne({email:email})
            if(!userExist){
                return res.status(400).json({msg:"User does not exist"})
                }
                // check if password is correct
                const matchpassword=await bcrypt.compare(password,userExist.password)
                if(!matchpassword){
                    return res.status(400).json({msg:"Password is incorrect"})
                    }
                const payload={
                    email:userExist.email,
                    id:userExist._id,
                    role:userExist.role

                }
                // create token
              const token=  jwt.sign(payload,process.env.SECRET_KEY,{
                     expiresIn:"2h"
                })
                // userExist=userExist.toObject()
                userExist.password=undefined
                userExist["token"]=token
                console.log("userexist after token added"+ (userExist))

                // creat cookies
                res.cookie("token",token,{
                    expires:new Date(Date.now()+ 3*24*60*60*1000),
                    httpOnly:true,
                }).status(200).json({
                    msg:"Login successful",
                    token:token,
                    user:userExist,
                    success:true
                })


    }
    catch(error){
        console.log(error)
        res.status(500).json({
            msg:"Internal server error",
            error:error.message,
            success:false
        })

    }
} 