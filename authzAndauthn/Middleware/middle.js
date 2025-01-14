const jwt=require("jsonwebtoken")
exports.auth=async(req,res,next)=>{

    try{
        // const token=req.body.token
        console.log("req,body",req.body,req.cookies)
        const token=req.cookies.token
        if(!token) return res.status(401).json({
            success:false,
            msg:"Please login to access this token is missing",

        })
try{

    const decoded=jwt.verify(token,process.env.SECRET_KEY)
    console.log("decoded data",decoded)
    req.user=decoded

}
catch(err){
    return res.status(500).json({
        success:false,
        msg:"Invalid token",
        })
    }
    next()



    }
    catch(error){
        console.log(error);
        res.status(500).json({
            message:"Internal Server Error error in authentication"

        })
    }
}

// is admin
exports.isAdmin=async(req,res,next)=>{
    try{
        const role=req.user.role
        if(role!=="admin"){
            return res.status(403).json({
                success:false,
                msg:"You are not authorized to access this route this route is for admin"
            })
        }
        next()


    }
    catch(error){
        console.log(error);
        res.status(500).json({
            success:false,
            message:"Internal Server Error error in is admin"
            })
    }
}

// isuser
exports.isUser=async(req,res,next)=>{
    try{
        const role=req.user.role
        if(role!=="user"){
            return res.status(403).json({
                success:false,
                msg:"You are not authorized to access this route this route is for user"
            })
        }
        next()


    }
    catch(error){
        console.log(error);
        res.status(500).json({
            success:false,
            message:"Internal Server Error error in is admin"
            })
    }
}
