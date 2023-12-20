
const { models } = require('../models/index.js');

module.exports = {
  up: async () => {
    try {
      if ('user_types' in models) {
        const user_types = models.user_types;
        const inserted = await user_types.insertMany([
          {
            _id:"6582cb2380ef6fd3df47947a",
            user_type:"employee"
          },
          {
            _id:"6582cb2380ef6fd3df47947b",
            user_type:"admin"
          }
          
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
      if ('user_types' in models) {
        const user_types = models.user_types;
        const deleted = await user_types.deleteMany({
          _id: { $in: ["6582cb2380ef6fd3df47947a", "6582cb2380ef6fd3df47947b"] }
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