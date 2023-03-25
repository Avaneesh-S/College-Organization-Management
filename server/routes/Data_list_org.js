const express=require('express');
const router=express.Router();

const Data_list_org_controller=require('../controller/Data_list_org_controller')

router.route('/')
    .get(Data_list_org_controller.sendingDataOrg)
    
module.exports=router;