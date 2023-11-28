import mongoose from "mongoose";


const schema = new mongoose.Schema({
    name:{
        type:String,
        required:true,
        unique:true
    },
    email: {
        type: String,
        required: true,
        unique:true
    },
    place:{
        type:String,
        required:true
    },
    designation:{
        type:String,
        required:true
    },
    contact:{
        type:String,
        required:true,
        unique:true
    },
    password: {
        type: String,
        required: true
    },
    
});

export default mongoose.model.users || mongoose.model("User",schema)