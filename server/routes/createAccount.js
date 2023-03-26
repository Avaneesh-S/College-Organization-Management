const express=require('express');
const router=express.Router();

const create_account_controller=require('../controller/create_account_controller')

router.route('/')
    .post(create_account_controller.createAccount)
    
module.exports=router;