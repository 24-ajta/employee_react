import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

import userSchema from "./model/user.schema.js";

const { sign } = jwt;


export async function register(req, res) {
    try {
        console.log(req.body);
        let { name, email,place,designation,contact,password } = req.body;
       
        let hashedPass = await bcrypt.hash(password, 10);
        let userExist = await userSchema.findOne({ name });
        if(userExist) {
            return res.status(400).send("User already exists");
        }
        let result = await userSchema.create({ name,email,place,designation,contact, password:hashedPass});
        if(result){
            return res.status(200).send("Registration successful!");
        }
    } catch (error) {
        console.log(error);
        return res.status(500).send("Error");
    }
}

export async function login(req, res) {
    try {
        let { name, password } = req.body;
        // if( username.length < 4 && password.length < 4) {
        //     return res.json("Invalid username or password");
        // }
        let user = await userSchema.findOne({ name });
        if(!user) {
            return res.status(400).send("Invalid username or password");
        }
        let passCheck = await bcrypt.compare(password, user.password);
        if(passCheck) {
            let token = await sign({
                name: user.name,
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

export async function getprofile(req, res) {
    try {
        let {id} = req.user;
        let userDetails = await userSchema.find({ _id:id });
           console.log(userDetails);
        if(userDetails.length > 0) {
            return res.status(200).send(userDetails);
        }
        return res.status(404).send("error");
    } catch (error) {
        console.log(error);
        return res.status(500).send("Error Occured");
    }
}
export async function profile(req,res){
    try {
        let user=req.user;
        let userdetails=await userSchema.findOne({_id:user.id},{password:0});
        if(userdetails){
            return res.json(userdetails);
        }
        return res.status(500).send("error");
    } catch (error) {
        console.log(error);
        return res.status(500).send("Error Occured");
    }
}



export async function getfile(req,res){
    try {
        let data = await userSchema.find();
        return res.json(data)
    } catch (error) {
        console.log(error);
        return res.status(500).send("error occured")
    }
}
export async function update(req,res){
    try {
        let {id} =req.query;
        let data = await req.body;
        let result= await userSchema.updateOne({_id:id},data)
        return res.json(result)
    } catch (error) {
        console.log(error);
        return res.status(500).send("error occured")
    }
}
export async function listing(req,res){
    try {
        let data = await userSchema.find();
        return res.json(data)
    } catch (error) {
        console.log(error);
        return res.status(500).send("error occured")
    }
}