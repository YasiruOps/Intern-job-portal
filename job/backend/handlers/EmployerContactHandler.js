const eContact = require("../models/employerContact");


function AddEmployerContact(request, response) {
    //ADD
    const empname = request.body.type;
    const name = request.body.question;
    const email = request.body.description;
    const qtype = request.body.date;
    const description = request.body.time; 
  
    const equestion = new eContact({
        empname,
        name,
        email,
        qtype,
        description,
    });

    equestion.save((err) => {
      if (err) {
        return response.status(400).json({
          error: err,
        });
      }
      return response.status(200).json({
        success: "Question sent successfully ",
      });
    });
  }
  
  module.exports = AddEmployerContact;