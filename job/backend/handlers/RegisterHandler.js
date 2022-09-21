const Auth = require("../models/internAuth");

function Register(request, response) {
  //ADD
  const email = request.body.email;
  const password = request.body.password;
  const fName = request.body.fName;
  const lName = request.body.lName;
  const dob = request.body.dob;
  const phone = request.body.phone;
  const address = request.body.address;

  const intern = new Auth({
    Email: email,
    Password: password,
    fName,
    lName,
    dob,
    phone,
    email,
    address,
  });

  intern.save((err) => {
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

module.exports = Register;
