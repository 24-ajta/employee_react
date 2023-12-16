'use strict';

module.exports = {
  up: (models, mongoose) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return models.users([
        {
          insertMany([
            {
              _id:"",
              name:"",
              email:"",
              place:"",
              designation:"",
              contact:"",
              password:""
            }
        },
      ]).then(res => {
      // Prints "1"
      console.log(res.insertedCount);
    });
    */
  },

  down: (models, mongoose) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return models.users
          .deleteMany({
            _id:{
              $in:[
                "657d9306833d9b9ece68d7ff"
              ],
            },
          })
        .then(res => {
      // Prints "1"
      console.log(res.deletedCount);
      });
    */
  }
};
