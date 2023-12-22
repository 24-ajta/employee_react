const jwt = require("jsonwebtoken");
const { errorfunction } = require("./responsehandler.js");
const authController = require("../controllers/authController")
const control_data = require("./control-data.json");
const users = require("../db/models/users.js");
const usertypes = require("../db/models/usertype.schema.js");

exports.accessControl = async function(access_types,req,res,next){
    try {
        if(access_types == "*"){
            next();
        } else {
            const authHeader = req.headers["authorization"];
            const token = authHeader ? authHeader.split(" ")[1] : null;
            if(
                token == null ||
                token == "null" ||
                token == "" ||
                token == "undefined"
            ) {
                let response = errorfunction({
                    statusCode:401,
                    message : "Invalid access token",
                });
                res.status(401).send(response);
            } else {
                jwt.verify(
                    token,
                    process.env.PRIVATE_KEY,
                    async function (err,decoded){
                        if(err){
                            let response = errorfunction({
                                statusCode:401,
                                message:err.message,
                            });
                            res.status(401).send(response);
                        } else {
                            let allowed = access_types
                            .split(",")
                            .map((obj) => control_data[obj]);

                            let user_type_id = (await users.findOne({_id: decoded.user_id})).user_type;
                            let user_type = (await usertypes.findOne({_id:user_type_id})).user_type;


                            if(allowed && allowed.includes(user_type)){
                                let revoked = await authController.checkRevoked(req,res);
                                if(revoked === false){
                                    next();
                                } else if (revoked === true) {
                                    let response = errorfunction({
                                        statusCode:401,
                                        message :"Revoked access token",
                                    });
                                    res.status(401).send(response);
                                } else {
                                    let response = errorfunction({
                                        statusCode:400,
                                        message:"Somethng went wrong",
                                    });
                                    res.status(400).send(response);
                                }
                            } else {
                                let response = errorfunction({
                                    statusCode:403,
                                    message:"Not allowed to access the route",
                                });
                                res.status(403).send(response);
                            }
                        }
                    }
                );
            }
        }
    } catch (error) {
        let response = errorfunction(error);
        res.status(400).send(response);
    }
};