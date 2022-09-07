const express = require('express');
const router = express.Router()

const AddJobsHandler = require('../handlers/AddJobsHandler');

//create
router.route('/').post((request, response) => {AddJobsHandler(request, response); });

module.exports = router;