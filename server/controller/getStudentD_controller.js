const attend=require('../models/Attendance');

const sendingData=async(req,res)=>{
    const org="IIIT Dharwad"
    const course="Data Structure"


    
    try {
        const all_details = await attend.find({ organisation: org, Course: course });
        const students = all_details.map(({ Students }) => Students);
        res.json(students);
      } catch (error) {
        console.error(error);
        res.status(500).send('Server error');
      }

};
    

module.exports={sendingData}