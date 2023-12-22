const express = require('express');
const router = express.Router();
const authController = require('../controllers/authController');
const accessControl = require('../utils/access-control').accessControl;

const setAccesControl = (access_type)=>{
    return (req,res,next)=>{
        accessControl(access_type,req,res,next);
    }
};

router.post('/login',setAccesControl("*"),authController.login);

module.exports = router;