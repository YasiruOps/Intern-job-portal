const express = require('express');
const router = express.Router()

import LoginHandler from '../handlers/LoginHandler'
import RegisterIntern from '../handlers/RegisterHandler'

//register
router.route('./register').post((request, response) => {RegisterIntern(request, response); });

//login
router.route('./login').post((request, response) => {LoginHandler(request, response); });
