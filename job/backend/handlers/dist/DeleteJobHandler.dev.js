"use strict";

var Jobs = require("../models/jobPost");

var Application = require("../models/application");

function DeleteJobHandler(request, response) {
  var jobID = request.params.id;
  Jobs.findOneAndDelete({
    _id: jobID
  }).then(function () {
    Application.deleteMany({
      jobID: jobID
    }).then(function () {
      response.status(200).send({
        status: "offer and its applcations removed"
      });
    })["catch"](function (err) {
      console.log(err.message);
      response.status(500).send({
        status: "Request failed to complete",
        err: err.message
      });
    });
  })["catch"](function (err) {
    response.status(500).send({
      status: "Request failed to complete",
      err: err.message
    });
  });
}

module.exports = DeleteJobHandler;