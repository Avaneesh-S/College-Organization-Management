const express=require('express');
const router=express.Router();

const updatAtten_controller=require('../controller/updateAtten_controller')

// signin
router.route('/')
    .post(updatAtten_controller.attenUpdate)
    
module.exports=router;