const {localFileUpload}=require("../Controllers/fileupload")
const {uploadImage,uploadVideo,uploadImageSizeReducer}=require("../Controllers/fIileuploadtocloudinary")
const express=require("express")
const router=express.Router()
router.post("/localfile",localFileUpload)
router.post("/imageupload",uploadImage)
router.post("/videoupload",uploadVideo)
router.post("/imagesizereduce",uploadImageSizeReducer)

module.exports=router