"use strict";

var express = require('express');

var router = express.Router();

var AddJobsHandler = require('../handlers/AddJobsHandler');

var JobFetchHandler = require('../handlers/JobFetchHandler');

var JobFetchAllHandler = require('../handlers/JobFetchAllHandler');

var DeleteJobHandler = require('../handlers/DeleteJobHandler');

var EditJobOfferHandler = require("../handlers/EditJobOfferHandler"); //create


router.route('/').post(function (request, response) {
  AddJobsHandler(request, response);
}); //fetch all for testing search page

router.route('/').get(function (request, response) {
  JobFetchAllHandler(request, response);
}); //fetch for employers

router.route('/:id').get(function (request, response) {
  JobFetchHandler(request, response);
}); //update

router.route('/update/:id').put(function (request, response) {
  EditJobOfferHandler(request, response);
}); //remove job

router.route('/delete/:id')["delete"](function (request, response) {
  DeleteJobHandler(request, response);
});
module.exports = router;