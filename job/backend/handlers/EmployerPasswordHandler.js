const Employer = require("../models/employer")

async function EmployerPasswordEdit(request, response){
        const cusId = request.params.id;
        let employer;

        try{
            employer = await Employer.findOne({_id:cusId})
            console.log("prevpassword",request.body.prevpassword)
            console.log("employer pass",employer.password)
            if(employer.password!=request.body.prevpassword){
                response.status(400).send({status:"Wrong previous password"});
                return;
            }
        }
        catch(error){
            console.log(error)
        }

       Employer.findByIdAndUpdate(cusId,{password:request.body.password}).then(()=>{
            response.status(200).send({status:"Password updated sucessfully"})
        }).catch((err)=>{
            console.log(err)
            response.status(500).send({status:"error with updating passwrd"})
        })
    }




module.exports = EmployerPasswordEdit;