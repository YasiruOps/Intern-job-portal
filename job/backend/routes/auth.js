const express = require('express');
const router = express.Router()


const LoginHandler = require('../handlers/LoginHandler');
const RegisterIntern = require('../handlers/RegisterHandler');
const EmployerLogin = require("../handlers/EmployerLoginHandler");
const FetchInternHandler = require("../handlers/FetchInternHandler")

//register
router.route('/register').post((request, response) => {RegisterIntern(request, response); });

//login employer
router.route('/employerLogin').post((request, response) => {EmployerLogin(request, response); });

//login intern
router.route('/login').post((request, response) => {LoginHandler(request, response); });

//fetch intern
router.route('/intern/:id').get((request, response) => {FetchInternHandler(request, response); });


module.exports = router;