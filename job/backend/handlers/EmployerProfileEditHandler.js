const Employer = require("../models/employer")

function EmployerProfileEdit(request, response){
        const cusId = request.params.id;
    
       Employer.findByIdAndUpdate(cusId, request.body).then(()=>{
            response.status(200).send({status:"Profile updated sucessfully"})
        }).catch((err)=>{
            console.log(err)
            response.status(500).send({status:"error with updating profile details"})
        })
    }

module.exports = EmployerProfileEdit;