const mongoose=require('mongoose');
const Schema=mongoose.Schema;

const newAccSchema=new Schema({
    fname:String,
    lname:String,
    password:String,
    email:String,
    phoNo:Number,
    organisation:String,
    designation:String,
    address:String
},{collection:'User_Details'});

const Acc=mongoose.model('Acc',newAccSchema);
module.exports=Acc;

