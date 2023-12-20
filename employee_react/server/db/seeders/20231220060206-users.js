const { models } = require('../models/index.js');

module.exports = {
  up: async () => {
    try {
      // Check if the models object contains the 'User' model
      if ('User' in models) {
        const User = models.User;
        const inserted = await User.insertMany([
          {
            _id: "6582b1b50fb67833f9ac813a",
            name: "Anjitha",
            email: "anjitha@gmail.com",
            place: "Pandalam",
            designation: "Admin1",
            contact: "8778998989",
            password: "Anjitha123@1"
          },
          {
            _id: "6582b5ad0fb67833f9ac8141",
            name: "Anjitha Nair",
            email: "anjithanair@gmail.com",
            place: "Pandalam",
            designation: "Admin2",
            contact: "8778998989",
            password: "Anjitha123@2"
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
          _id: { $in: ["6582b1b50fb67833f9ac813a", "6582b5ad0fb67833f9ac8141"] }
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

// module.exports = {
//   up: (models, mongoose) => {
//     const User = models.User;
//     return models.User
//       .insertMany([
//         {
//           _id: "6582b1b50fb67833f9ac813a",
//             name: "Anjitha Nair",
//             email: "anjithanair@gmail.com",
//             place: "Pandalam",
//             designation: "Admin",
//             contact: "8778998989",
//             password: "Anjitha123@"
//         },
//       ])
//       .then((res) => {
//         // Prints "1"
//         console.log("insrtedcdata",res.insertedCount);
//       });
//   },

//   down: (models, mongoose) => {
//     const User = models.User;
//     return models.User
//       .deleteMany({
//         _id: {
//           $in: [
//              "6582b1b50fb67833f9ac813a",
//           ],
//         },
//       })
//       .then((res) => {
//         console.log("deleteddata",res.deletedCount);
//       });
//   },
// };
