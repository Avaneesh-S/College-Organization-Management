
const User=require('../models/User_Details');

const login=(req,res)=>{

    //const present_user_email=req.body.email_login
    const present_user_email=req.body.email_login
    const present_user_password=req.body.password_login
   
    let user_details=[]
    User.collection.find({Email:present_user_email}).forEach(user=>user_details.push(user))
    .then(()=>{
        
        if(user_details)
        {
            console.log(user_details[0])
            if(user_details[0].Password===present_user_password)
            {
                
                res.json({mssg:"yes"})
            }
            else{
                
                res.json({mssg:"no"})
            }
        }
        else{
            res.json({mssg:"no"})
        }

        
        
        
        
        

    })

}

module.exports={login}