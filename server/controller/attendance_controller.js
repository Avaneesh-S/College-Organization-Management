const attend=require('../models/Attendance');

const Attend=(req,res)=>{
    
    const arr=req.body.day_attend

    const org="IIIT Dharwad"
    const course="Data Structure"

    const all_details=[]

    attend.collection.find({organisation:org,Course:course}).forEach(user=>all_details.push(user))
    .then(()=>{
        const all_days=all_details[0].Attendance
        const currentDate = new Date();
        const year = currentDate.getFullYear();
        const month = (currentDate.getMonth() + 1).toString().padStart(2, '0');
        const date = currentDate.getDate().toString().padStart(2, '0');
        const formattedDate = `${year}-${month}-${date}`;
        
        all_days.push({Date:formattedDate,Attend:arr})
        console.log(all_days)
        attend.collection.updateOne({organisation:org,Course:course},{$set:{Attendance:all_days}})
        .then(()=>{
            console.log("data added")
            res.json({mssg:"data added"})
        })

    })
   
    
    


}

module.exports={Attend}