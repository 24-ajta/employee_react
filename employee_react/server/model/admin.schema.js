import mongoose from "mongoose";

const schema = new mongoose.Schema({
    username:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    }
});

export default mongoose.model.admins || mongoose.model("admin",schema)
