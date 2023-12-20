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
            password: "$2y$10$Fa1C5GP9MkXv8gxfA7yLq.KvXXonnF1qOQuDUcQyRXOgelV3cE1FS",//password:Admin#123
            user_type:"6582cb2380ef6fd3df47947b"
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
