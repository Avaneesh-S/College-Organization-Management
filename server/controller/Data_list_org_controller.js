const Organisations=require('../models/Organisations');

const sendingDataOrg=async(req,res)=>{
  
    try {
        const all_details = await Organisations.find({Type:'Organisation'});
        const institutes = all_details.map(({Name }) => Name);
        res.json(institutes);
        console.log(institutes);
      } catch (error) {
        console.error(error);
        res.status(500).send('Server error');
      }

};
    

module.exports={sendingDataOrg}