const successfunction = require("../utils/responsehandler").successfunction;
const errorfunction = require("../utils/responsehandler").errorfunction;
const users = require("../db/models/users");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
// const accessControl = require("../db/models/")


async function login(req,res){
    try {
      console.log("Request Body:", req.body);
  
      let email=req.body.email;
      let password=req.body.password;
      console.log("email and password:",email,password)
      
      if(email && password){
        let user=await users.findOne({
          $and:[{email:email}],
        })
        .populate("user_type");
        console.log("email:",email)        
        console.log("user", user);
  
        if(!user){
          let response=errorfunction({statusCode:400,message:"User not found"})
          res.status(response.statuscode).send(response)
          return;
        }
        let usertype=user.user_type.user_type;
        if(user){
          bcrypt.compare(password,user.password,async(error,auth)=>{
            
         
            if(auth === true){
              let access_token=jwt.sign(
                {user_id:user._id},
                process.env.PRIVATE_KEY,
                {expiresIn:"10d"}
              );
            let response=successfunction({
              statusCode:200,
              data:access_token,
              message:"Login successfull",
            });
            response.usertype=usertype;
            res.status(response.statusCode).send(response);
            return;
            
          }else{
            let response=errorfunction({
              statusCode:401,
              message:"Invalid credentials"
            });
            res.status(response.statuscode).send(response);
            return;
          }
        })
        }else{
          let response=errorfunction({
            statusCode:401,
            message:"Invalid credentials"
          });
          res.status(response.statuscode).send(response);
          return;
        }
          }else{
            if(!email){
              let response=errorfunction({
                statusCode:422,
                message:"Email is required",
              });
              res.status(response.statuscode).send(response);
              return;
            }
            if(!password){
              let response=errorfunction({
                statusCode:422,
                message:"Password is required",
              });
              res.status(response.statuscode).send(response)
              return;
            }
          }
       
    } catch (error) {
      if(process.env.NODE_ENV=="production"){
        let response=errorfunction({
          statusCode:400,
          message:error
          ?error.message 
             ?error.message
             :error
          :"Something went wrong"
        });
        res.status(response.statuscode).send(response)
        return;
      }else{
        let response=errorfunction({statusCode:400,message:error});
        res.status(response.statuscode).send(response)
        return;
      }
    }
  }

module.exports ={
    login
}