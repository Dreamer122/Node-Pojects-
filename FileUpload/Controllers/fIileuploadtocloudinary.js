const cloudinary=require("cloudinary").v2

const FileModel=require("../Models/File")

 async function uploadfile(file,folder,quality){
    const options={folder}
    if(quality){
        options.quality=quality
    }
    options.resource_type="auto"
    console.log("file",file.tempFilePath)
    return await cloudinary.uploader.upload(file.tempFilePath,options)
}


exports.uploadImage=async(req,res)=>{
    try{
// 1. get data from req,body and file from files
const {username,email}=req.body
const file=req.files.file
console.log("data",file)
// get type of file
let filetype=file.name.split(".")[1]
// supported file 
        const supportedFileType=['png',"jpg","jpeg"]
        // check file is supported or not
        if(!supportedFileType.includes(filetype)){
            return res.status(400).json({
                message:"file type is not supported"
            })
        }

        // console.log("supported types")
            // upload file to cloudinary
            const resp=await uploadfile(file,"nodejan2025")
            // console.log("after file upload=",resp)
            // save file to database
            const filedata=await new FileModel({
                username,
                email,
                imageUrl:resp.secure_url
            }).save()
            return res.status(200).json({
                message:"file uploaded successfully",
                data:filedata
            })


        }
// file upload cloudinary
// insert data in db
// return response

    
    catch(error){
        console.log("error"+error.message)
        return res.status(500).json({
            message:"internal server error"+error.message

        })
    }
}


// video upload 
exports.uploadVideo=async(req,res)=>{
    try{
// 1. get data from req,body and file from files
const {username,email}=req.body
const file=req.files.file
console.log("data",file)
// get type of file
let filetype=file.name.split(".")[1]
// supported file 
        const supportedFileType=["mp4","mov"]
        // check file is supported or not
        if(!supportedFileType.includes(filetype)){
            return res.status(400).json({
                message:"file type is not supported"
            })
        }

        console.log("supported types")
            // upload file to cloudinary
            const resp=await uploadfile(file,"nodejan2025")
            console.log("after file upload=",resp)
            // save file to database
            const filedata=await new FileModel({
                username,
                email,
                imageUrl:resp.secure_url
            }).save()
            return res.status(200).json({
                message:"video uploaded successfully",
                data:filedata
            })


        }
// file upload cloudinary
// insert data in db
// return response

    
    catch(error){
        console.log("error"+error.message)
        return res.status(500).json({
            message:"internal server error"+error.message

        })
    }
}

// reduce size of image
exports.uploadImageSizeReducer=async(req,res)=>{
    try{
// 1. get data from req,body and file from files
const {username,email}=req.body
const file=req.files.file
console.log("data",file)
// get type of file
let filetype=file.name.split(".")[1]
// supported file 
        const supportedFileType=['png',"jpg","jpeg"]
        // check file is supported or not
        if(!supportedFileType.includes(filetype)){
            return res.status(400).json({
                message:"file type is not supported"
            })
        }

        // console.log("supported types")
            // upload file to cloudinary
            const resp=await uploadfile(file,"nodejan2025",50)
            // console.log("after file upload=",resp)
            // save file to database
            const filedata=await new FileModel({
                username,
                email,
                imageUrl:resp.secure_url
            }).save()
            return res.status(200).json({
                message:"file uploaded successfully",
                data:filedata
            })


        }
// file upload cloudinary
// insert data in db
// return response

    
    catch(error){
        console.log("error"+error.message)
        return res.status(500).json({
            message:"internal server error"+error.message

        })
    }
}