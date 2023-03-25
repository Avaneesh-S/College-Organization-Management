
const Acc=require('../models/NewAcc');
const {org,course} = require('../datas/requireData')

const login=(req,res)=>{

    //const present_user_email=req.body.email_login
    const present_user_email=req.body.email_login
    const present_user_password=req.body.password_login
   
    let user_details=[]
    Acc.collection.find({email:present_user_email}).forEach(user=>user_details.push(user))
    .then(()=>{
        
        if(user_details)
        {
            console.log(user_details[0])
            if(user_details[0].password===present_user_password)
            {
                org.push(user_details[0].organisation);
                course.push(user_details[0].designation);
                console.log(org[0],course[0]);
                console.log(user_details[0].password);
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