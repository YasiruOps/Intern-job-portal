const express = require('express');
const router = express.Router()

const ForumQuestionHandler = require("../handlers/ForumQuestionHandler") 
const ForumQuestionFetch = require("../handlers/ForumQuestionFetchHandler")
const EditForumQuestionHandler = require("../handlers/EditForumQuestionHandler")

//create
router.route('/add').post((request, response) => {ForumQuestionHandler(request, response); });

//update
router.route('/update/:id').put((request, response)=>{EditForumQuestionHandler(request,response);});

//fetch
router.route('/').get((request, response) => {ForumQuestionFetch(request, response); });

module.exports = router;