import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

import userSchema from "./model/user.schema.js";
import { successfunction } from "./utils/responsehandler.js";
import { errorfunction } from "./utils/responsehandler.js";

const { sign } = jwt;


export async function register(req, res) {
    try {
        console.log(req.body);
        let { name, email,place,designation,contact,password } = req.body;
       
        // let hashedPass = await bcrypt.hash(password, 10);
       
        // let userExist = await userSchema.findOne({name});
        // if(userExist) {
        //     return res.status(400).send("User already exists");
        // }
        // let result = await userSchema.findOneAndUpdate({},{$set:{ name,email,place,designation,contact, password,deleted:false}},{upsert:true})
        let result = await userSchema.create({ name,email,place,designation,contact, password,deleted:false});
        if(result){
            // return res.status(200).send("Registration successful!");
            let response = successfunction({statusCode:200,message:"Registered Successfully"});
            return res.status(200).send(response)
        }else{
            let response=errorfunction({statusCode:500,message:"Not Registered"});
            return res.status(500).send(response)
        }
    } catch (error) {
        console.log(error);
        return res.status(500).send("Error");
    }
}

export async function listing(req,res){
    try {
        let data = await userSchema.find({deleted: {$ne: true}});
        if(data){
            let response = successfunction({statusCode:200,data:data,message:"User Details"});
            return res.status(200).send(response)
        }else{
            let response=errorfunction({statusCode:500,message:"Not able to find user details"});
            return res.status(404).send(response)

        }
        return res.json(data)

    } catch (error) {
        console.log(error);
        return res.status(500).send("error occured")
    }
}


export async function profile(req,res){
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


export async function update(req,res){
    try {
        console.log("reached update api");
        const {id} =req.params;
        let userExist = await userSchema.findOne({_id:id,deleted:{$ne:true}});
        if(!userExist){
            return res.status(400).send("Not Found")
        }
        const {name,email,designation,place,contact} = req.body;
        let result = await userSchema.updateOne({_id:id,deleted: {$ne: true}},{$set:{name,email,designation,place,contact}});
        if(result){
            let response = successfunction({statusCode:200,data:result,message:"User Updated Successfully"});
            return res.status(200).send(response)
        }else{
            let response=errorfunction({statusCode:500,message:"Not able to update"});
            return res.status(404).send(response)
        }
        console.log(req.body);
        return res.json(result)
        // res.end()
    } catch (error) {
        console.log(error)
    }
}


export async function deletedata(req,res){
    try {
        const {id} =req.params;
        let userExist = await userSchema.findOne({_id:id,deleted:{$ne:true}});
        if(!userExist){
            let response = errorfunction({statusCode:404,message:"User not found"});
            return res.status(404).send(response)
        }
        let result = await userSchema.updateOne({_id:id},{$set:{deleted:true,deletedAt:new Date}});
        if(result.modifiedCount==1){
            let response = successfunction({statusCode:200,message:"User deleted Successfully"});
            return res.status(200).send(response)
        }else{
            let response=errorfunction({statusCode:500,message:"User deletion Failed!"});
            return res.status(404).send(response)
        }
        return res.json(result)
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


// export async function login(req, res) {
//     try {
//         let { name, password } = req.body;
//         // if( username.length < 4 && password.length < 4) {
//         //     return res.json("Invalid username or password");
//         // }
//         let user = await userSchema.findOne({ name });
//         if(!user) {
//             return res.status(400).send("Invalid username or password");
//         }
//         let passCheck = await bcrypt.compare(password, user.password);
//         if(passCheck) {
//             let token = await sign({
//                 name: user.name,
//                 id: user._id
//             },
//             process.env.SECRET_KEY,
//             {
//                 expiresIn: "24h"
//             })
//             return res.status(200).json({
//                 msg: "Login successful...",
//                 token: token
//             })
//         }
//         return res.status(403).send("invalid username or password")
//     } catch (error) {
//         console.log(error);
//         res.status(500).send("Error");
//     }
// }

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


