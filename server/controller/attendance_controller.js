
const csv=require('csv-parser')
const fs=require('fs')

const attend=(req,res)=>{
    
    const results = [];
    fs.createReadStream('attendance.csv')
        .pipe(csv())
        .on('data', (data) => results.push(data))
        .on('end', () => {
        //console.log(results)
        res.json({value:results});
    });
    


}

module.exports={attend}