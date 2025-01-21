const mongoose=require("mongoose")
const nodemailer = require("nodemailer");
const fileSchema=new mongoose.Schema({
    username:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
        },
    imageUrl:{
            type:String,
            required:true
        }
})

// post middleware hooks
fileSchema.post('save', async function(doc) {
    console.log(doc);
    try{
        const transporter = nodemailer.createTransport({
            host: "smtp.gmail.com",
            //port: 587,
            //secure: false, // true for port 465, false for other ports
            auth: {
              user: process.env.USER_NAME,
              pass: process.env.PASS_KEY,
            },
          });

           
            // send mail with defined transport object
            const info = await transporter.sendMail({
              from: 'monika gola', // sender address
              to: doc.email, // list of receivers
              subject: "File uploading confirmation", // Subject line
              text: "Hello world?", // plain text body
              html: `<b>Your file uploaded successfully</b> <br> <p>click on the link below to check your file</p> 
              <a href=${doc.imageUrl}>click here </a>`, // html body
            });
          
            console.log("Message sent: %s", info.messageId);
            // Message sent: <d786aa62-4e0a-070a-47ed-0b0666549519@ethereal.email>
            //   console.log('%s has been saved', doc._id);

    }
    catch(error){
        console.log("email error=",error.message)
    }
 
  });

module.exports =mongoose.model("FileModel",fileSchema)