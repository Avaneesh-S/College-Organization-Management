const express=require('express')
const app=express()
const path=require('path')
require('dotenv').config()
const connectDb=require('./config/Db_connect')


connectDb()

app.use(express.static(path.join(__dirname,'build')))
app.use(express.urlencoded({extended:false}))//to be able to read data from the url or form which we send
app.use(express.json())

app.use('/attendance',require('./routes/attendance'))
app.use('/profile',require('./routes/profile'))

app.listen(5000,()=>{
    console.log(process.env.NODE_ENV)
    console.log("listening on port 5000")
})



