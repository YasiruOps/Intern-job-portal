const express = require('express');
const router = express.Router()

const EmployerRegisterHandler = require("../handlers/EmployerRegisterHandler")

//create
router.route('/add').post((request, response) => {EmployerRegisterHandler(request, response); });

module.exports = router;