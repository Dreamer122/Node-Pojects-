const express=require("express")
const routes=express.Router();
const {addTodo}=require("../Controllers/Addtodo");
const {allTodo}=require("../Controllers/Alltodo");
const {deleteTodo}=require("../Controllers/deleteTodo");
const {updateTodo}=require("../Controllers/updateTodo");
routes.post("/addtodo",addTodo)
routes.get("/alltodo",allTodo)
routes.delete("/deletetodo",deleteTodo);
routes.put("/updatetodo",updateTodo);


module.exports=routes