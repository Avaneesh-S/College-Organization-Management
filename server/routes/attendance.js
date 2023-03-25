const express=require('express');
const router=express.Router();

const attendance_controller=require('../controller/attendance_controller')

router.route('/')
    .post(attendance_controller.Attend)
    
module.exports=router;