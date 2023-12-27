const successfunction = require("../utils/responsehandler").successfunction;
const errorfunction = require("../utils/responsehandler").errorfunction;
const users = require("../db/models/users");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const registereduservalidation = require("../validation/registervalid.js");
const updateuservalidation = require("../validation/updateuservalidation.js");
const { generateRandomPassword } = require("../managers/userManager");


async function register(req, res) {
    try {
        console.log(req.body);
        let {name,email,place,designation,contact,password } = req.body;
        let validationResult= await registereduservalidation(req.body);
        console.log("Validation Result...", validationResult);   
        let userPassword = generateRandomPassword(5);
        let salt = bcrypt.genSaltSync(10);
        let hashed_password = bcrypt.hashSync(userPassword,salt);    
        if(validationResult.isValid){
            let result = await users.create({ name,email,place,designation,contact, password:hashed_password,deleted:false});
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
        let count =Number(await users.countDocuments({deleted:{$ne:true}}));
        const pageNumber = parseInt(req.query.page) || 1;
        const pageSize = parseInt(req.query.pageSize) || count;
        let info = await users
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
            return res.status(404).send(response);
        }
    } catch (error) {
        console.log(error);
        return res.status(400).send("error occured")
    }
}

async function profile(req,res){
    try {
        // console.log("single user id : ", req.params.id);
        let id=req.params.id;
        let userdetails=await users.findOne({_id : id,deleted:{$ne:true}}).select('-password -__v');
        if(userdetails){
            let response = successfunction({statusCode:200,data:userdetails,message:"Details of employee"});
            return res.status(200).send(response);
        }else{
            let response=errorfunction({statusCode:500,message:"User not found"});
            return res.status(404).send(response);
        }
    } catch (error) {
        console.log(error);
        return res.status(500).send("Error Occured");
    }
}

async function update(req,res){
    try {
        console.log("reached update api");
        const {id} =req.params;
        let userExist = await users.findOne({_id:id,deleted:{$ne:true}});
        if(!userExist){
            return res.status(400).send("User Not Found")
        }
        const {name,email,designation,place,contact} = req.body;
        let updatevalidationresult=await updateuservalidation(req.body);
        console.log("Update validation Result",updatevalidationresult);
        if(updatevalidationresult.isValid){
            let result = await users.updateOne({_id:id,deleted: {$ne: true}},{$set:{name,email,designation,place,contact}});
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
    } catch (error) {
        console.log(error)
    }
}

async function deletedata(req,res){
    try {
        const {id} =req.params;
        let userExist = await users.findOne({_id:id,deleted:{$ne:true}});
        console.log("user exists",userExist);
        if(!userExist){
            let response = errorfunction({statusCode:404,message:"User not found"});
            return res.status(404).send(response)
        }else{

        
        let result = await users.updateOne({_id:id},{$set:{deleted:true,deletedAt:new Date}});
        if(result.modifiedCount==1){
            let response = successfunction({statusCode:200,message:"User deleted Successfully"});
            return res.status(200).send(response)
        }else{
            let response=errorfunction({statusCode:500,message:"User deletion Failed!"});
            return res.status(500).send(response)
        }
    }
    } catch (error) {
        return res.status(500).send("error")
    }
}

module.exports = {
    register,
    listing,
    profile,
    update,
    deletedata
}

