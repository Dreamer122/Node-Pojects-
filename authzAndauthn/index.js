const express=require("express")
const app=express()

require("dotenv").config()
const port=process.env.PORT

// middleware for json 
app.use(express.json())

const cookieParser=require("cookie-parser")
app.use(cookieParser());


// get route
app.get("/",(req,res)=>{
    res.send("hello world")
})

// mount the routes
const postRoutes=require("./Routes/routes")
app.use("/api/v1",postRoutes)

const databaseConnect=require("./config/database")
databaseConnect()

// server listen 
app.listen(port,()=>{
    console.log(`server is running on port ${port}`)
})
