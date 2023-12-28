const { models } = require('../models/index.js');

module.exports = {
  up: async () => {
    try {
      if ('users' in models) {
        const users = models.users;
        const inserted = await users.insertMany([
          {
            _id: "6582b1b50fb67833f9ac813a",
            name: "Anjitha",
            email: "anjitha@gmail.com",
            place: "Pandalam",
            designation: "Admin1",
            contact: "8778998989",
            password: "$2a$10$gZtV1yQuQ6ivIQV15lzhHOVrFKppAIraXsw4jcrlse7hxNbC9qwNC",
            user_type:"6582cb2380ef6fd3df47947b"
          },
          //password:Admin#123
          
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
      if ('users' in models) {
        const users = models.users;
        const deleted = await users.deleteMany({
          _id: { $in: ["6582b1b50fb67833f9ac813a", ] }
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

