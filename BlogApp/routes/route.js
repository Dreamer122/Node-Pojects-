const express=require("express")
const route=express.Router()
const {addPost,getAllPosts}=require("../controllers/Addpost")
const {likePost,dislikePost}=require("../controllers/Like")
const {commentPost,deleteComment}=require("../controllers/Comment")

route.post("/addpost",addPost)
route.post("/likepost",likePost)
route.post("/commentpost/:id",commentPost)
route.get("/getallpost",getAllPosts)
route.delete("/deletecomment",deleteComment)
route.delete("/dislikepost",dislikePost)
module.exports=route
