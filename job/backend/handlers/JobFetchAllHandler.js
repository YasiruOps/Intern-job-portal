const Job = require("../models/jobPost");

function JobFetchAllHandler(request, response){

        Job.find().then((iques)=>{ 
        return response.status(200).json(iques);            
     }).catch((err) =>{
        response.status(500).json({msg:"Server Error"});
     })

}

module.exports = JobFetchAllHandler;
