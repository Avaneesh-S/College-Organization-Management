
const User=require('../models/User_Details');

const profile=(req,res)=>{

    //const present_user_email=req.body.email_login
    const present_user_email="avaneesh@gmail.com"
   
    let user_details=[]
    User.collection.find({Email:present_user_email}).forEach(user=>user_details.push(user))
    .then(()=>{
        console.log(user_details[0])
        res.json({value:user_details[0]})

    })

}

module.exports={profile}