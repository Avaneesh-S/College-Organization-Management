const mongoose=require('mongoose');
const Schema=mongoose.Schema;

const UserSchema=new Schema({
    Name:String,
    Designation:String,
    Organisation:String,
    Email:String,
    Phone:String,
    Address:String,
    Education:[String],
    Password:String,
},{collection:'User_Details'});

const User=mongoose.model('User',UserSchema);
module.exports=User;

