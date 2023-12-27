const bcrypt = require("bcrypt");



async function generateRandomPassword(length) {
    let charset = 
    "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789@#$";
    let password=""

    for(var i =0;i<length; i++){
        var randomIndex = Math.floor(Math.random() * charset.length);
        password += charset.charAt(randomIndex);
    }
   
    return password;
}

// var randomPassword = generateRandomPassword(12);

// let salt = bcrypt.genSaltSync(10);
// let password = bcrypt.hashSync(randomPassword,salt);

module.exports = {
    generateRandomPassword
}
 