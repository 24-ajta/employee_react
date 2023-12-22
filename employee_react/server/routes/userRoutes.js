const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController.js');
const accessControl = require('../utils/access-control').accessControl;

const setAccesControl = (access_type)=>{
    return (req,res,next)=>{
        accessControl(access_type,req,res,next)
    }
};



//employee api's
router.post('/register',setAccesControl('1,2'),userController.register);
router.get('/listing',setAccesControl('*'),userController.listing);
router.get('/profile/:id',setAccesControl('1,2'),userController.profile);
router.put('/update/:id',setAccesControl('1,2'),userController.update);
router.delete('/deletedata/:id',setAccesControl('1,2'),userController.deletedata);

module.exports = router;
