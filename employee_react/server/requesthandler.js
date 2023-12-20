const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const userSchema = require("./db/models/user.schema.js");
const { successfunction } = require("./utils/responsehandler.js");
const { errorfunction } = require("./utils/responsehandler.js");
const registereduservalidation = require("./validation/registervalid.js");
const updateuservalidation = require("./validation/updateuservalidation.js");

const { sign } = jwt;

async function register(req, res) {
    try {
        console.log(req.body);
        let {name,email,place,designation,contact,password } = req.body;
        let validationResult= await registereduservalidation(req.body);
        console.log("Validation Result...", validationResult);       
        if(validationResult.isValid){
            let result = await userSchema.create({ name,email,place,designation,contact, password,deleted:false});
            if(result){
            let response = successfunction({statusCode:200,data:result,message:"Registered Successfully"});
            return res.status(200).send(response);
            }else{
            let response=errorfunction({statusCode:500,message:"Not Registered"});
            return res.status(500).send(response);
            }
        }else{
            let response=errorfunction({statusCode:500,message:"Validation failed"})
            response.errors=validationResult.errors;
            return res.status(200).send(response);
        }

    } catch (error) {
        console.log(error);
        return res.status(500).send("Error");
    }
}

async function listing(req,res){
    try {
        let count =Number(await userSchema.countDocuments({deleted:{$ne:true}}));
        const pageNumber = parseInt(req.query.page) || 1;
        const pageSize = parseInt(req.query.pageSize) || count;
        let info = await userSchema
          .find({deleted: {$ne: true}})
          .sort({_id:-1})
          .skip(pageSize * (pageNumber - 1))
          .limit(pageSize);
        if(info){
            let total_pages = Math.ceil(count / pageSize);
            let data = {
                count:count,
                totalpages:total_pages,
                currentPage:pageNumber,
                datas:info,
            };
            let response = successfunction({statusCode:200,data:data,message:"User Details"});
            return res.status(200).send(response)
        }else{
            let response=errorfunction({statusCode:500,message:"Not able to find user details"});
            return res.status(404).send(response)

        }
        return res.json(data)

    } catch (error) {
        console.log(error);
        return res.status(400).send("error occured")
    }
}

// export async function listing(req, res) {
//     try {
//       let count = Number(await userSchema.countDocuments({ deleted: { $ne: true } }));
//       const pageNumber = parseInt(req.query.page) || 1;
//       const pageSize = parseInt(req.query.pageSize) || count;
  
//       if (pageNumber < 1) {
//         return res.status(400).json({ message: 'Invalid page number' });
//       }
  
//       if (pageSize <= 0) {
//         return res.status(400).json({ message: 'Invalid page size' });
//       }
  
//       let data = await userSchema
//         .find({ deleted: { $ne: true } })
//         .sort({ _id: -1 })
//         .skip(pageSize * (pageNumber - 1))
//         .limit(pageSize);
  
//       if (data) {
//         let total_pages = Math.ceil(count / pageSize);
//         let details = {
//           count: count,
//           totalpages: total_pages,
//           currentPage: pageNumber,
//           datas: data,
//         };
//         let response = successfunction({ statusCode: 200, data: details, message: "User Details" });
//         return res.status(200).send(response);
//       } else {
//         let response = errorfunction({ statusCode: 500, message: "Not able to find user details" });
//         return res.status(404).send(response);
//       }
//     } catch (error) {
//       console.log(error);
//       return res.status(500).send("Error occurred");
//     }
//   }
  
async function profile(req,res){
    try {
        // console.log("single user id : ", req.params.id);
        let id=req.params.id;
        let userdetails=await userSchema.findOne({_id : id,deleted:{$ne:true}}).select('-password -__v');
        if(userdetails){
            let response = successfunction({statusCode:200,data:userdetails,message:"Details of employee"});
            return res.status(200).send(response);
        }else{
            let response=errorfunction({statusCode:500,message:"User not found"});
            return res.status(404).send(response);
        }
        return res.status(500).send("error");
    } catch (error) {
        console.log(error);
        return res.status(500).send("Error Occured");
    }
}

async function update(req,res){
    try {
        console.log("reached update api");
        const {id} =req.params;
        let userExist = await userSchema.findOne({_id:id,deleted:{$ne:true}});
        if(!userExist){
            return res.status(400).send("User Not Found")
        }
        const {name,email,designation,place,contact} = req.body;
        let updatevalidationresult=await updateuservalidation(req.body);
        console.log("Update validation Result",updatevalidationresult);
        if(updatevalidationresult.isValid){
            let result = await userSchema.updateOne({_id:id,deleted: {$ne: true}},{$set:{name,email,designation,place,contact}});
            if(result){
                let response = successfunction({statusCode:200,data:result,message:"User Updated Successfully"});
                return res.status(200).send(response)
            }else{
                let response=errorfunction({statusCode:500,message:"Not able to update"});
                return res.status(404).send(response)
            }
        }else{
            let response=errorfunction({statusCode:500,message:"Validation failed"})
            response.errors=updatevalidationresult.errors;
            return res.status(200).send(response);
        }
        
        console.log(req.body);
        return res.json(result)
        // res.end()
    } catch (error) {
        console.log(error)
    }
}


async function deletedata(req,res){
    try {
        const {id} =req.params;
        let userExist = await userSchema.findOne({_id:id,deleted:{$ne:true}});
        console.log("user exists",userExist);
        if(!userExist){
            let response = errorfunction({statusCode:404,message:"User not found"});
            return res.status(404).send(response)
        }else{

        
        let result = await userSchema.updateOne({_id:id},{$set:{deleted:true,deletedAt:new Date}});
        if(result.modifiedCount==1){
            let response = successfunction({statusCode:200,message:"User deleted Successfully"});
            return res.status(200).send(response)
        }else{
            let response=errorfunction({statusCode:500,message:"User deletion Failed!"});
            return res.status(500).send(response)
        }
    }
        // return res.json(result)
        // .then((data)=>{
        //     res.status(200).send(data);
        // })
        // .catch((error)=>{
        //     res.status(404).send(error)
        // })
       
        // await userSchema.deleteOne({_id:id})
        

    } catch (error) {
       return res.status(500).send("error")
    }
}


async function login(req, res) {
    try {
        let { username, password } = req.body;
        // if( username.length < 4 && password.length < 4) {
        //     return res.json("Invalid username or password");
        // }
        let user = await adminSchema.findOne({ username });
        if(!user) {
            return res.status(400).send("Invalid username or password");
        }
        let passCheck = await bcrypt.compare(password, user.password);
        if(passCheck) {
            let token = await sign({
                username: user.username,
                id: user._id
            },
            process.env.SECRET_KEY,
            {
                expiresIn: "24h"
            })
            return res.status(200).json({
                msg: "Login successful...",
                token: token
            })
        }
        return res.status(403).send("invalid username or password")
    } catch (error) {
        console.log(error);
        res.status(500).send("Error");
    }
}
module.exports = {
    register,
    listing,
    profile,
    update,
    deletedata,
    login
};
// export async function getprofile(req, res) {
//     try {
//         let {id} = req.user;
//         let userDetails = await userSchema.find({ _id });
//            console.log(userDetails);
//         if(userDetails.length > 0) {
//             return res.status(200).send(userDetails);
//         }
//         return res.status(404).send("error");
//     } catch (error) {
//         console.log(error);
//         return res.status(500).send("Error Occured");
//     }
// }



// export async function getfile(req,res){
//     try {
//         let data = await userSchema.find();
//         return res.json(data)
//     } catch (error) {
//         console.log(error);
//         return res.status(500).send("error occured")
//     }
// }
// export async function update(req,res){
//     try {
//         const {id} =req.params;
//         console.log(req.params);
//         // let data = await req.body;
//         const {name,email,designation,place,contact} = req.body;
//         let result= await userSchema.updateOne({_id:id},{$set:{name,email,designation,place,contact}})
//         res.end()
//         return res.json(result)
//     } catch (error) {
//         console.log(error);
//         return res.status(500).send("error occured")
//     }
// }



// export async function deletedata(req,res){
//     try {
//         const {id} =req.params;
//         await userSchema.deleteOne({_id:id})
//         .then((data)=>{
//             res.status(200).send(data);
//         })
//         .catch((error)=>{
//             res.status(404).send(error)
//         })
//     } catch (error) {
//        return res.status(500).send("error")
//     }
// }


