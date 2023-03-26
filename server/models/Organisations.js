const mongoose=require('mongoose');
const Schema=mongoose.Schema;

const organisationeSchema=new Schema({
    Type:String,
    Name:[String]
    
},{collection:'Datas'});

const organisations=mongoose.model('organisations',organisationeSchema);
module.exports=organisations;

