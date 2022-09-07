const Application = require("../models/application");

function FetchAppplicationHandler(request, response){
        Application.find().then((applicaiton)=>{  
        console.log(applicaiton);
        return response.status(200).json(applicaiton);            
     }).catch((err) =>{
        response.status(500).json({msg:"Server Error"});
     })

}

module.exports = FetchAppplicationHandler;
