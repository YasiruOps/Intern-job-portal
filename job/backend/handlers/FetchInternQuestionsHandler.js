const EmpContact = require("../models/employerContact");

function FetchInternQuestionHandler(request, response){
        EmpContact.find().then((iques)=>{ 
        return response.status(200).json(iques);            
     }).catch((err) =>{
        response.status(500).json({msg:"Server Error"});
     })

}

module.exports = FetchInternQuestionHandler;
