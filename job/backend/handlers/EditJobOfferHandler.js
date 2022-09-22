const Job = require("../models/jobPost")

function EditJobOfferHandler(request, response){
        const _id = request.params.id;
    
        Job.findByIdAndUpdate(_id, request.body).then(()=>{
            response.status(200).send({status:"Offer updated sucessfully"})
        }).catch((err)=>{
            console.log(err)
            response.status(500).send({status:"error with updating ffer"})
        })
    }

module.exports = EditJobOfferHandler;