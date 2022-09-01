const express = require('express');
const router = express.Router()

const EmployerContactHander = require("../handlers/EmployerContactHandler")

//create
router.route('/add').post((request, response) => {EmployerContactHander(request, response); });

module.exports = router;