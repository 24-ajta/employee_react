const { models } = require('../models/index.js');

module.exports = {
  up: async () => {
    try {
      // Check if the models object contains the 'User' model
      if ('User' in models) {
        const User = models.User;
        const inserted = await User.insertMany([
          {
            _id: "657d9306833d9b9ece68d7ff",
            name: "Anjitha",
            email: "anjitha@gmail.com",
            place: "Pandalam",
            designation: "Admin",
            contact: "8778998989",
            password: "Anjitha123@"
          },
        ]);
        console.log(inserted.length + ' documents inserted');
      } else {
        throw new Error('User model not found in models object');
      }
    } catch (error) {
      console.error('Error in up() function:', error);
      throw error;
    }
  },

  down: async () => {
    try {
      // Check if the models object contains the 'User' model
      if ('User' in models) {
        const User = models.User;
        const deleted = await User.deleteMany({
          _id: "657d9306833d9b9ece68d7ff",
        });
        console.log(deleted.deletedCount + ' documents deleted');
      } else {
        throw new Error('User model not found in models object');
      }
    } catch (error) {
      console.error('Error in down() function:', error);
      throw error;
    }
  },
};
