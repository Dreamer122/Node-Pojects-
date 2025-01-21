// app create 
const express=require("express")
const app=express()
// port find 
const port=process.env.PORT || 4000

// add middleware
app.use(express.json())

const fileupload=require("express-fileupload");
app.use(fileupload({
    useTempFiles : true,
    tempFileDir : '/tmp/'
}))
// db se connection
const db=require("./config/database")
db.connect()

// cloud se connect krna hai
const cloudinary = require('./Config/Cloudinary');
cloudinary.cloudinaryConnect();

// api routes mount krrna hai 

const Upload=require("./Routes/route")
app.use("/api/v1/upload",Upload);
// activate server
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
    });
