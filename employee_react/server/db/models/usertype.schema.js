const mongoose = require('mongoose');


  const user_types = new mongoose.Schema({
    user_type:{
        type:String
    }
  }, {
    timestamps: true,
  });

 
module.exports = mongoose.model("user_types",user_types);
