const express = require('express');
const router = express.Router()

const AddApplicationHandler = require("../handlers/AddApplicationHandler")
const FetchAppplicationHandler = require("../handlers/FetchAppplicationHandler")
const DeleteApplicationHandler = require("../handlers/DeleteApplicationHandler")

//create
router.route('/').post((request, response) => {AddApplicationHandler(request, response); });

//fetch
router.route('/:id').get((request, response) => {FetchAppplicationHandler(request, response); });

//remove
router.route('/:id').delete((request, response) => {DeleteApplicationHandler(request, response); });

module.exports = router;