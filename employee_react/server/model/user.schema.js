import mongoose from "mongoose";


const schema = new mongoose.Schema({
    fname:{
        type:String,
        required:true,
        unique:true
    },
    lname:{
        type:String,
        required:true,
        unique:true
    },
    gender:{
        type:String,
        required:true,
    },
    dob:{
        type:Date,
        required:true
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
    state:{
        type:String,
        required:true
    },
    district:{
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