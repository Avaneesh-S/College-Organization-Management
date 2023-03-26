const express=require('express');
const router=express.Router();

const Data_list_controller=require('../controller/Data_list_controller')

router.route('/')
    .get(Data_list_controller.sendingData)
    
module.exports=router;