const express=require('express');
const router=express.Router();

const attendance_controller=require('../controller/attendance_controller')

router.route('/')
    .get(attendance_controller.attend)
    
module.exports=router;