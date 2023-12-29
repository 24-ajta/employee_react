const nodemailer = require("nodemailer");
const dotenv = require("dotenv");
dotenv.config();
exports.sendEmail = async function  (emails,subject,content){
   return new Promise(async (resolve,reject)=>{
    try {
        if (typeof emails == "object") emails = emails.join(",");
         console.log("EMAIL_HOST",process.env.EMAIL_HOST);
         console.log("EMAIL_PORT",process.env.EMAIL_PORT)
         console.log("EMAIL_USER",process.env.EMAIL_USER)
         console.log("EMAIL_PASSWORD",process.env.EMAIL_PASSWORD)

        let transporter = nodemailer.createTransport({
            host:process.env.EMAIL_HOST,
            port:process.env.EMAIL_PORT,
            secure:false,
            auth:{
                user:process.env.EMAIL_USER,
                pass:process.env.EMAIL_PASSWORD,
            },
        });
        console.log("emails",emails);
        console.log("subject",subject);
        console.log("content",content)
        let info = await transporter.sendMail({
            from :'"ems" <support@ems.com>',
            to:emails,
            subject:subject,
            html:content
        });

        resolve(true)
    } catch (error) {
        //  error.message? error.message :error
        console.log("error when rejected",error)
        reject(false)
        
    }
   })
}