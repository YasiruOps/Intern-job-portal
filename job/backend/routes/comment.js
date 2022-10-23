const express = require('express');
const router = express.Router()

const GetCommentHandler = require("../handlers/GetCommentHandler")
const AddCommentHandler = require("../handlers/AddCommentHandler")
const DeleteCommentHandler = require("../handlers/DeleteCommentHandler")

//create
router.route('/').post((request, response) => {AddCommentHandler(request, response); });

//fetch
router.route('/:forumID').get((request, response) => {GetCommentHandler(request, response); });

//remove
router.route('/delete/:id').delete((request, response) => {DeleteCommentHandler(request, response); });

module.exports = router;