const Application = require("../models/application");

function FetchInternAppplicationHandler(request, response){

        const internID = request.params.id;

        Application.find({internID}).then((applicaiton)=>{  
        return response.status(200).json(applicaiton);            
     }).catch((err) =>{
        response.status(500).json({msg:"Server Error"});
     })

}

module.exports = FetchInternAppplicationHandler;
