const Application = require("../models/application")

async function EditApplicationStatus(request, response){
        const cusId = request.params.id;

        Application.findByIdAndUpdate(cusId,{applicationStatus:request.body.applicationStatus}).then(()=>{
            response.status(200).send({status:"Updated status"})
        }).catch((err)=>{
            console.log(err)
            response.status(500).send({status:"error with updating status"})
        })
    }




module.exports = EditApplicationStatus;