const express = require('express');
const router = express.Router()

const AddApplicationHandler = require("../handlers/AddApplicationHandler")
const FetchAppplicationHandler = require("../handlers/FetchAppplicationHandler")

//create
router.route('/').post((request, response) => {AddApplicationHandler(request, response); });

//fetch
router.route('/:id').get((request, response) => {FetchAppplicationHandler(request, response); });

module.exports = router;