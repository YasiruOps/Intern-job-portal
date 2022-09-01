const Employer = require("../models/employer");

function EmployerRegister(request, response) {
  //ADD
  const email = request.body.email;
  const displayname = request.body.displayname;
  const password = request.body.password;
  const registrationID = request.body.registrationID;
  const compname = request.body.compname;
  const contact = request.body.contact;
  const address = request.body.address;

  const employer = new Employer({
    email,
    displayname,
    password,
    registrationID,
    compname,
    contact,
    address
    })


  employer.save((err) => {
    if (err) {
      return response.status(400).json({
        error: err,
      });
    }
    return response.status(200).json({
      success: "Registerd Successfully ",
    });
  });
}

module.exports = EmployerRegister;
