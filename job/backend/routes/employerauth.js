const express = require('express');
const router = express.Router()

const EmployerRegisterHandler = require("../handlers/EmployerRegisterHandler")
const EmployerProfileFetch = require("../handlers/EmployerProfileFetchHandler")

//create
router.route('/add').post((request, response) => {EmployerRegisterHandler(request, response); });

//fetch
router.route('/:id').get((request, response) => {EmployerProfileFetch(request, response); });

module.exports = router;