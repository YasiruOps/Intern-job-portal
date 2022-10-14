const internAuth = require("../models/User");

function FetchInternHandler(request, response){

        const internID = request.params.id;

        internAuth.find({_id:internID}).then((intern)=>{  
        return response.status(200).json(intern);            
     }).catch((err) =>{
        response.status(500).json({msg:"Server Error"});
     })

}

module.exports = FetchInternHandler;