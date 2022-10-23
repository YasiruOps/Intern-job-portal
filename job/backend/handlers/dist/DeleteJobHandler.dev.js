"use strict";

var Jobs = require("../models/jobPost");

function DeleteJobHandler(request, response) {
  var jobID = request.params.id;
  Jobs.findOneAndDelete({
    _id: jobID
  }).then(function () {
    response.status(200).send({
      status: "Job offer removed"
    });
  })["catch"](function (err) {
    response.status(500).send({
      status: "Request failed to complete",
      err: err.message
    });
  });
}

module.exports = DeleteJobHandler;