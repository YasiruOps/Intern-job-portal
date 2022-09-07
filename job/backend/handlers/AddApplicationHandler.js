const Application = require("../models/application")

function AddApplicationHandler(request, response) {
  //ADD
  const fname = request.body.fname;
  const lname = request.body.lname;
  const bday = request.body.bday;
  const phone = request.body.phone;
  const email = request.body.email;
  const address = request.body.address;
  const experience = request.body.experience;
  const refname = request.body.refname;
  const refBday = request.body.refBday;
  const refPhone = request.body.refPhone;
  const refAddress = request.body.refAddress;
  const refEmail = request.body.refEmail;
  const date = request.body.date;

  const payload = new Application({
    fname,
    lname,
    bday,
    phone,
    email,
    address,
    experience,
    refname,
    refBday,
    refPhone,
    refAddress,
    refEmail,
    date,
  });

  payload.save((err) => {
    if (err) {
      return response.status(400).json({
        error: err,
      });
    }
    return response.status(200).json({
      success: "Application Sent Successfully ",
    });
  });
}

module.exports = AddApplicationHandler;