const express=require('express');
const router=express.Router();

const profile_controller=require('../controller/profile_controller')

router.route('/')
    .get(profile_controller.profile)
    
module.exports=router;