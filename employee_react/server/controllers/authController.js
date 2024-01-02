const successfunction = require("../utils/responsehandler").successfunction;
const errorfunction = require("../utils/responsehandler").errorfunction;
const users = require("../db/models/users");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const revokeManager = require('../managers/revokeManager');
const accessControl = require("../db/models/revoked_tokens");



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
            
         console.log("auth",auth);
            if(auth === true){
              let access_token=jwt.sign(
                {user_id:user._id},
                process.env.PRIVATE_KEY,
                {expiresIn:"10d"}
              );
              if (usertype === 'employee' && !user.passwordResetDone) {
                let response = errorfunction({
                  statusCode: 401,
                  message: "Please reset your password"
                });
                res.status(response.statuscode).send(response);
                return;
              }
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

async function passwordResetController(req,res){
try {
  const authHeader =req.headers["authorization"]
  const token = authHeader.split(" ")[1];
  
  let password = req.body.password;
  console.log("password",password);

  let confirm_password=req.body.confirm_password;
  console.log("confirm_password",confirm_password);

  if (password !== confirm_password) {
    let response = errorfunction({
      statuscode: 400,
      message: "Password and confirm password do not match",
    });
    return res.status(response.statuscode).send(response);
  }

  decoded = jwt.decode(token);
  // const newToken = jwt.sign(
  //   {user_id:decoded.user_id},
  //   process.env.PRIVATE_KEY,
  //   {expresIn:"10d"}
  // );
  // await accessControl.revoke();
  // return res.status(200).send(response)
  let user = await users.findOne({
    $and:[{_id:decoded.user_id}, { password_token: token }],
  });
  
  if(user){
    let salt = bcrypt.genSaltSync(10);
    let password_hash = bcrypt.hashSync(password,salt);
    let data = await users.updateOne(
      {_id:decoded.user_id},
      {$set: { password: password_hash, password_token: null ,passwordResetDone: true}}
    );
    if(data.matchedCount === 1 && data.modifiedCount ==1){
      let response = successfunction({
        statusCode:200,
        message:"Password changed Successfully",
      });
      res.status(response.statusCode).send(response);
      return;
    }else if(data.matchedCount === 0){
      let response = errorfunction({
        statuscode:404,
        message:"User not found"
      });
      return res.status(response.statuscode).send(response);
    } else {
      let response = errorfunction({
        statuscode:400,
        message:"Password reset failed",
      });
      res.status(response.statuscode).send(response);
      return;
    }
  }else {
    let response = errorfunction({
      statuscode:403,
      message:"Forbidden",
    });
    return res.status(response.statuscode).send(response);
  }

} catch (error) {
  
  if (process.env.NODE_ENV == "production") {
    let response = errorfunction({
      statuscode: 400,
      message: error
        ? error.message
          ? error.message
          : error
        : "Something went wrong",
    });

    res.status(response.statuscode).send(response);
    return;
  } else {
    let response = errorfunction({ statuscode: 400, message: error });
    res.status(response.statuscode).send(response);
    return;
  }
  
}
}


  // async function checkRevoked (req, res) {
  //   return new Promise((resolve, reject) => {
  //     const authHeader = req.headers["authorization"];
  //     const token = authHeader.split(" ")[1];
  
  //     revokeManager
  //       .checkRevoked(token)
  //       .then((message) => {
  //         resolve(message);
  //       })
  //       .catch((error) => {
  //         reject(error);
  //       });
  //   });
  // }; 
  async function checkRevoked(req, res) {
    try {
      const authHeader = req.headers["authorization"];
      const token = authHeader.split(" ")[1];
  
      if (!token) {
        return errorfunction({
          statusCode: 400,
          message: "Token is required",
        });
      }
  
      const message = await revokeManager.checkRevoked(token);
      return message;
    } catch (error) {
      return errorfunction({
        statusCode: 500,
        message: error.message || "Something went wrong while checking token revocation",
      });
    }
  }
  
 async function logout (req, res) {
    try {
      console.log("reached the logout");
      const authHeader = req.headers["authorization"];
      const token = authHeader.split(" ")[1];
      if (!token) {
        let response = errorfunction({
          statusCode: 400,
          message: "Token is required",
        });
        res.status(response.statuscode).send(response);
        return;
      }
  
      let isRevoked = await revokeManager.checkRevoked(token);
      //console.log("isRevoked : ", isRevoked);
      if (!isRevoked) {
        revokeManager.revoke(token)
          .then((result) => {
            let response = successfunction(result);
            res.status(result.status).send(response);
            return;
          })
          .catch((error) => {
            let response = errorfunction(error);
            res.status(error.status).send(response);
            return;
          });
      } else {
        //console.log("Token already in revoked list");
        res.status(406).send(
          errorfunction({
            statusCode: 406,
            message: "Token already in revoked list",
          })
        );
      }
    } catch (error) {
      if (process.env.NODE_ENV == "production") {
        let response = errorfunction({
          statusCode: 400,
          message: error
            ? error.message
              ? error.message
              : error
            : "Something went wrong",
        });
  
        res.status(response.statuscode).send(response);
        return;
      } else {
        let response = errorfunction({ statusCode: 400, message: error });
        res.status(response.statuscode).send(response);
        return;
      }
    }
  };
// async function logout(req, res) {
//   try {
//     const authHeader = req.headers["authorization"];
//     const token = authHeader.split(" ")[1];

//     if (!token) {
//       let response = errorfunction({
//         statusCode: 400,
//         message: "Token is required",
//       });
//       res.status(response.statuscode).send(response);
//       return;
//     }

//     let isRevoked = await revokeManager.checkRevoked(token);

//     if (!isRevoked) {
//       // Ensure to await the result of revokeManager.revoke() instead of using .then()
//       let result = await revokeManager.revoke(token);
//       let response = successfunction(result);
//       res.status(result.status).send(response);
//     } else {
//       res.status(406).send(
//         errorfunction({
//           statusCode: 406,
//           message: "Token already in revoked list",
//         })
//       );
//     }
//   } catch (error) {
//     if (process.env.NODE_ENV == "production") {
//       let response = errorfunction({
//         statusCode: 400,
//         message: error.message ? error.message : "Something went wrong",
//       });
//       res.status(response.statuscode).send(response);
//     } else {
//       let response = errorfunction({ statusCode: 400, message: error });
//       res.status(response.statuscode).send(response);
//     }
//   }
// }

module.exports ={
    login,
    logout,
    passwordResetController,
    checkRevoked,
   
}