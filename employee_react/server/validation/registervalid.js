const users = require("../db/models/users.js");
const isEmpty = require("./isEmpty.js");
const validator = require("validator");

async function registereduservalidation(data){

let errors={}


data.name = !isEmpty(data.name)?data.name :"";
data.email=!isEmpty(data.email)?data.email:"";
data.place=!isEmpty(data.place)?data.place:"";
data.designation=!isEmpty(data.designation)?data.designation:"";
data.contact=!isEmpty(data.contact)?data.contact:"";
data.password=!isEmpty(data.password)?data.password:"";


if(validator.isEmpty(data.name)){
    errors.name_empty="Name field is Required";
}

if(!validator.isLength(data.name,{min:2,max:50})){
    errors.name="Name must be between 2 and 30";
}

if(validator.isEmpty(data.email)){
    errors.email_empty="Email is Required";
}

let email_count=await users.countDocuments({
    "email":data.email,deleted:{$ne:true}
})
if(email_count>0){
    errors.email_exist="Email already exists";
}

if(!validator.isLength(data.email,{min:2,max:30})){
    errors.email="Email must be between 2 and 30";
}

if(!validator.isEmail(data.email)){
    errors.email_invalid="Email is invalid";
}

if(validator.isEmpty(data.place)){
    errors.place_empty="Place field cannot be empty";
}


if(!validator.isLength(data.place,{min:2})){
    errors.place="Invalid Address"
}

if(validator.isEmpty(data.designation)){
    errors.designation_empty="Work must be mentioned";
}

if(validator.isEmpty(data.contact)){
    errors.contact_empty="Contact cannot be empty"
}

if(!validator.isLength(data.contact,{min:10})){
    errors.contact="Please enter proper contact number"
}

if(validator.isEmpty(data.password)){
    errors.password_empty="Password cannot be empty"
}


return {
    errors,
    isValid:isEmpty(errors)
};


}

module.exports = registereduservalidation;