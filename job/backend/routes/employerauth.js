const express = require('express');
const router = express.Router()

const EmployerRegisterHandler = require("../handlers/EmployerRegisterHandler")
const EmployerProfileFetch = require("../handlers/EmployerProfileFetchHandler")
const EmployerProfileEdit = require("../handlers/EmployerProfileEditHandler")
const EmployerPasswordEdit = require("../handlers/EmployerPasswordHandler")

//create
router.route('/add').post((request, response) => {EmployerRegisterHandler(request, response); });

//fetch
router.route('/:id').get((request, response) => {EmployerProfileFetch(request, response); });

//update
router.route('/update/:id').put((request, response)=>{EmployerProfileEdit(request,response)});

//update password
router.route('/updatepassword/:id').put((request, response)=>{EmployerPasswordEdit(request,response)});

module.exports = router;