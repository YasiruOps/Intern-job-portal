const Jobs = require("../models/jobPost")

function DeleteJobHandler(request, response) {
        let jobID = request.params.id;

        Jobs.findOneAndDelete({_id:jobID}).then(()=>{
            response.status(200).send({status:"Job offer removed"})
        }).catch((err)=>{
            console.log(err.message);
            response.status(500).send({status:"Request failed to complete",err : err.message})
        })
}