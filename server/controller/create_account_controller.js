const Organisations=require('../models/NewAcc');

const bcrypt=require('bcrypt');
const Acc = require('../models/NewAcc')

const createAccount=async(req,res)=>{
  console.log('hii');
  let {fname,lname,email,password,phoNo,address,organisation,designation}=req.body;
  console.log(fname,lname,email,password,phoNo,address,organisation,designation)
  // fname=fname.trim();
  // lname=lname.trim();
  // email=email.trim();
  // password=password.trim();
  // phoNo=phoNo.trim();
  // address=address.trim();
  // organisation=organisation.trim();
  // designation=designation.trim();
  
  if(fname==""||lname==""||email==""||password==""||phoNo==""||address==""||organisation==""||designation==""){
      res.json({
          status: "FAILED",
          message:"Empty input fields!"
      });
  }
  else if(!/^[a-zA-Z]*$/.test(fname)){
      res.json({
          status: "FAILED",
          message:"Invalid fname entered"
      })
  }
  else if(!/^[a-zA-Z]*$/.test(lname)){
      res.json({
          status: "FAILED",
          message:"Invalid lname entered"
      })
  }
  else if(!/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email)){
      res.json({
          status: "FAILED",
          message: "Invalid email entered"
      })
  }
  else if(password.length<8){
      res.json({
          status:"FAILED",
          message:"Password is too short!"
      })
  }
  else{
      // checking if user already exists
      Acc.find({email}).then(result => {
              if(result.length){
                  //A user already exists
                  res.json({
                      status:"FAILED",
                      message:"User with the provided email already exists"
                  })
              }else{
                  //Try to create new user

                  // password handling
                  // const saltRounds=10;
                  // bcrypt.hash(password,saltRounds).then(hashedPassword=>{
                      const newUser=new Acc({
                          fname,
                          lname,
                          email,
                          phoNo,
                          address,
                          organisation,
                          designation,
                          // password:hashedPassword
                          password

                      });
                      newUser.save().then(result => {
                          console.log('Registration Success')
                          res.json({
                              status:"SUCCESS",
                              message: "Signup successful",
                              data: result,
                          })
                      })
                      .catch(err => {
                          res.json({
                              status:"FAILED",
                              message:"An error occured while saving user account!"
                          })
                      })

                  // })
                  // .catch(err => {
                  //     res.json({
                  //         status:"FAILED",
                  //         message:"An error occured while hashing password!"
                  //     })
                  // })
              }
      }).catch(err=>{
          console.log(err);
          res.json({
              status:"FAILED",
              message:"An error occured while checking for existing user!"
          })
      })
  }

};
    

module.exports={createAccount}