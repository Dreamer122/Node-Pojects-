const express=require("express")
const app=express();

// environment variables
const dotenv=require("dotenv")
dotenv.config()
const port=process.env.PORT|| 4000

// adding middleware
app.use(express.json())

// default route
app.get("/",(req,res)=>{
    res.send("your project is working ")
})
// map routes 
const todoroutes=require("./Routes/route")

app.use("/api/v1",todoroutes)

// connect database
const databaseConnect=require("./config/database")
databaseConnect()

// listen to the server

app.listen(port,()=>{
    console.log(`server is running on port ${port}`)
})
