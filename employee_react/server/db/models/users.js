const mongoose = require('mongoose');

// let User;
const users = new mongoose.Schema(

{ 

    name: {
        type: String,
        required: true,
        unique: false,
      },
      email: {
        type: String,
        required: true,
        unique: false,
      },
      place: {
        type: String,
        required: true,
      },
      designation: {
        type: String,
        required: true,
      },
      contact: {
        type: String,
        required: true,
      },
      user_type:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"user_types"
      },
      deleted: {
        type: Boolean,
      },
      deletedAt: {
        type: Date,
      },
  }, {
    timestamps: true,
  });



module.exports = mongoose.model("users",users);
