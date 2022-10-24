"use strict";

var Application = require("../models/application");

function AddApplicationHandler(request, response) {
  //ADD
  // const fname = request.body.fname;
  // const lname = request.body.lname;
  // const bday = request.body.bday;
  // const phone = request.body.phone;
  // const email = request.body.email;
  var offerTitle = request.body.offerTitle;
  var internID = request.body.internID;
  var employerID = request.body.employerID;
  var applicationStatus = request.body.applicationStatus;
  var pdfID = request.body.pdfID;
  var jobID = request.body.jobID;
  var address = request.body.address;
  var experience = request.body.experience;
  var refname = request.body.refname;
  var refBday = request.body.refBday;
  var refPhone = request.body.refPhone;
  var refAddress = request.body.refAddress;
  var refEmail = request.body.refEmail;
  var date = request.body.date;
  var payload = new Application({
    // fname,
    // lname,
    // bday,
    // phone,
    // email,
    // address,
    offerTitle: offerTitle,
    internID: internID,
    employerID: employerID,
    pdfID: pdfID,
    applicationStatus: applicationStatus,
    jobID: jobID,
    experience: experience,
    refname: refname,
    refBday: refBday,
    refPhone: refPhone,
    refAddress: refAddress,
    refEmail: refEmail,
    date: date
  });
  payload.save(function (err) {
    if (err) {
      return response.status(400).json({
        error: err
      });
    }

    return response.status(200).json({
      success: "Application Sent Successfully "
    });
  });
}

module.exports = AddApplicationHandler;