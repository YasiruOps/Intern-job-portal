const express = require('express');
const router = express.Router()

const ForumQuestionHandler = require("../handlers/ForumQuestionHandler") 
const ForumQuestionFetch = require("../handlers/ForumQuestionFetchHandler")

//create
router.route('/add').post((request, response) => {ForumQuestionHandler(request, response); });

//fetch
router.route('/').get((request, response) => {ForumQuestionFetch(request, response); });

module.exports = router;