const express=require("express")
const app=express();
const PORT=4000

app.get("/",(req,res)=>{
    res.send("<h1>Hello World</h1>")
})
app.get("/hello",(req,res)=>{
    res.send("<h1>Hello user</h1>")
})
app.listen(PORT,()=>{
    console.log(`Server is running on port ${PORT}`)
})