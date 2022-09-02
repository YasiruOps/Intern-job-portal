const Employer = require("../models/employer")

function EmployerProfileFetch(request, response){
    const cusId = request.params.id;


        Employer.find({_id:cusId}).then((employer)=>{  
        console.log(employer);
        return response.status(200).json(employer);            
     }).catch((err) =>{
        response.status(500).json({msg:"Server Error"});
     })

}

module.exports = EmployerProfileFetch;
