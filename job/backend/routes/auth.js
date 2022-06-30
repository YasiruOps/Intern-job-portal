const express = require('express');
const router = express.Router()


const LoginHandler = require('../handlers/LoginHandler');
const RegisterIntern = require('../handlers/RegisterHandler');

//register
router.route('/register').post((request, response) => {RegisterIntern(request, response); });

//login
router.route('/login').post((request, response) => {LoginHandler(request, response); });

module.exports = router;