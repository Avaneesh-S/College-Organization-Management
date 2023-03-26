const Organisations=require('../models/Organisations');

const sendingData=async(req,res)=>{
  
    try {
        const all_details = await Organisations.find({Type:'Institute'});
        const institutes = all_details.map(({Name }) => Name);
        res.json(institutes);
        // console.log(institutes);
      } catch (error) {
        console.error(error);
        res.status(500).send('Server error');
      }

};
    

module.exports={sendingData}