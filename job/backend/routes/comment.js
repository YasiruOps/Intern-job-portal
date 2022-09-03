const express = require('express');
const router = express.Router()

const GetCommentHandler = require("../handlers/GetCommentHandler")
const AddCommentHandler = require("../handlers/AddCommentHandler")


//create
router.route('/').post((request, response) => {AddCommentHandler(request, response); });

//fetch
router.route('/:formID').get((request, response) => {GetCommentHandler(request, response); });

module.exports = router;