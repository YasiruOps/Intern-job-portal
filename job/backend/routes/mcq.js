const express = require('express');
const router = express.Router()


const McqHandler = require('../handlers/McqHandler');
const AddMcqHandler = require('../handlers/AddMcqHandler');

//fetch
router.route('/').get((request, response) => {McqHandler(request, response); });

//create
router.route('/').post((request, response) => {AddMcqHandler(request, response); });

module.exports = router;