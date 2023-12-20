const mongoose = require('mongoose');

let User;

try {
  // Try to retrieve the existing model to prevent redefining it
  User = mongoose.model('User');
} catch {
  // Define the model if it doesn't exist
  const schema = new mongoose.Schema({
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
      password: {
        type: String,
        required: true,
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

  User = mongoose.model('User', schema);
}

module.exports = User;
