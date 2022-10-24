const Jobs = require("../models/jobPost")
const Application = require("../models/application")

function DeleteJobHandler(request, response) {
        let jobID = request.params.id;
        
        Jobs.findOneAndDelete({_id:jobID}).then(()=>{ 
            Application.deleteMany({jobID}).then(()=>{
                response.status(200).send({status:"offer and its applcations removed"})
            }).catch((err)=>{
                console.log(err.message);
                response.status(500).send({status:"Request failed to complete",err : err.message})
            })    
        }).catch((err)=>{
            response.status(500).send({status:"Request failed to complete",err : err.message})
        })
}

module.exports = DeleteJobHandler;