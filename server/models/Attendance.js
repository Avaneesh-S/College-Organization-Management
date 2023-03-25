const mongoose=require('mongoose');
const Schema=mongoose.Schema;

const attendanceSchema=new Schema({
    organisation:String,
    Faculty:String,
    Course:String,
    Students:[String],
    Attendance:[{date:Date,Attend:[Number]}]
    
},{collection:'Attendance'});

const attend=mongoose.model('attendance',attendanceSchema);
module.exports=attend;

