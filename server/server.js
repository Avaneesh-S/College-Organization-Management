const express=require('express')
const app=express()
const path=require('path')

app.use(express.static(path.join(__dirname,'build')))
app.use(express.urlencoded({extended:false}))//to be able to read data from the url or form which we send
app.use(express.json())

app.use('/attendance',require('./routes/attendance'))

app.listen(5000,()=>{
    console.log("listening on port 5000")
})



