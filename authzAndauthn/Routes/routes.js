const express=require("express")

const router=express.Router()
const {auth,isAdmin,isUser}=require("../Middleware/middle")
const {Signup,login}=require("../controllers/Auth")

router.post("/signup",Signup)
router.post("/login",login)

router.get("/test",auth,(req,res)=>{
    res.status(200).json({
        message:"Hello from protected route",
        success:true
    })
})

// for admin 
router.get("/admin",auth,isAdmin,(req,res)=>{
    res.status(200).json({
        message:"Hello from admin route",
        success:true
    })
})

// for user
router.get("/user",auth,isUser,(req,res)=>{
    res.status(200).json({
        message:"Hello from user route",
        success:true
    })
})

module.exports=router
