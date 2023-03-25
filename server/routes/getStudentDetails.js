const express=require('express');
const router=express.Router();

const getStudentD_controller=require('../controller/getStudentD_controller')

router.route('/')
    .post(getStudentD_controller.sendingData)
    
module.exports=router;