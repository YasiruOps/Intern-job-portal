const express = require('express');
const router = express.Router()

const AddJobsHandler = require('../handlers/AddJobsHandler');
const JobFetchHandler = require('../handlers/JobFetchHandler');

//create
router.route('/').post((request, response) => {AddJobsHandler(request, response); });

//fetch
router.route('/').get((request, response) => {JobFetchHandler(request, response); });

module.exports = router;