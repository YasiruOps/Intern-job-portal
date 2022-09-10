const eContact = require("../models/employerContact");


function AddEmployerContact(request, response) {
    //ADD
    const empname = request.body.empname;
    const qtitle = request.body.qtitle;
    const name = request.body.name;
    const email = request.body.email;
    const qtype = request.body.qtype;
    const desc = request.body.desc; 
    const date2 = request.body.date2; 
  
    const equestion = new eContact({
        empname,
        qtitle,
        name,
        email,
        qtype,  
        desc,
        date2,
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