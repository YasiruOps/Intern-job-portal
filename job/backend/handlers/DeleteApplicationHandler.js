const Application = require("../models/application")

function DeleteApplicationHandler(request, response) {
        let appID = request.params.id;

        Application.findOneAndDelete({_id:appID}).then(()=>{
            response.status(200).send({status:"applcation removed"})
        }).catch((err)=>{
            console.log(err.message);
            response.status(500).send({status:"Request failed to complete",err : err.message})
        })
}

module.exports = DeleteApplicationHandler;
