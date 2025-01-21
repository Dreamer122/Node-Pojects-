const FileModel=require("../Models/File")

exports.localFileUpload=async(req,res)=>{
    try{
        // 1get file from request
        const file=req.files.file
        console.log(file)
        // file path
        const filePath=`${__dirname}/files/${Date.now()}.${file.name.split(".")[1]}`
        // move 
         file.mv(filePath,(err)=>{
            console.log(err,"error occured while moving")
         })

         return res.status(200).json({
            message:"file uploaded successfully",
            filePath:filePath

         })
    }
    catch(error){
        console.log("error"+error.message)
        return res.status(500).json({
            message:"internal server error"+error.message
        })
    }
}