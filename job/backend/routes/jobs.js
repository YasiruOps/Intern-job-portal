const express = require('express');
const router = express.Router()

const AddJobsHandler = require('../handlers/AddJobsHandler');
const JobFetchHandler = require('../handlers/JobFetchHandler');
const JobFetchAllHandler = require('../handlers/JobFetchAllHandler');
const DeleteJobHandler = require('../handlers/DeleteJobHandler');
const EditJobOfferHandler = require("../handlers/EditJobOfferHandler")
const { response } = require('express');

//create
router.route('/').post((request, response) => {AddJobsHandler(request, response); });

//fetch all for testing search page
router.route('/').get((request, response) => {JobFetchAllHandler(request, response); });

//fetch for employers
router.route('/:id').get((request, response) => {JobFetchHandler(request, response); });

//remove job
router.route('/:id').delete((request,reponse) => {DeleteJobHandler(request, response); });

//update
router.route('/update/:id').put((request, response)=>{EditJobOfferHandler(request,response);});

module.exports = router;