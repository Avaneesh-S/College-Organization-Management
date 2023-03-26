
const Acc=require('../models/NewAcc');
const {org,course} = require('../datas/requireData')

const login=(req,res)=>{

    //const present_user_email=req.body.email_login
    const present_user_email=req.body.email_login
    const present_user_password=req.body.password_login

    console.log("details:")
    console.log(present_user_email)
    console.log(present_user_password)
   
    let user_details=[]
    let temp=[]
    User.collection.find({Email:present_user_email}).forEach(user=>user_details.push(user))
    .then(()=>{

        console.log(user_details.length)
        if(user_details.length===0)
        {
            console.log("popoppopop")
            return res.json({mssg:"no"})
        }
        else
        {
            console.log("yoyoyoy")
            console.log(user_details[0])
            if(user_details[0].password===present_user_password)
            {
                
                return res.json({mssg:"yes"})
            }
            else{

                return res.json({mssg:"no"})
            }
        }
        
    })

}

module.exports={login}