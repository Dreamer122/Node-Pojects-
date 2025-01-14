const express=require("express")
const app=express();
const cors=require("cors")

// environment variables
const dotenv=require("dotenv")
dotenv.config()
const port=process.env.PORT|| 4000


// adding middleware
app.use(express.json())
// app.use(cors({
//     origin: "http://localhost:5173",
//     credentials: true,
//     methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
// }))
app.use(cors({
    origin:"*"
}))

// Handle preflight requests
// app.options("*", cors());
// default route
app.get("/",(req,res)=>{
    res.send("your project is working ")
})
// map routes 
const emproutes=require("./routes/route")

app.use("/api/v1",emproutes)

// connect database
const databaseConnect=require("./config/database")
databaseConnect()

// listen to the server

app.listen(port,()=>{
    console.log(`server is running on port ${port}`)
})
