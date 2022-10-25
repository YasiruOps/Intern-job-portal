const express = require('express');
const router = express.Router()

const ForumQuestionHandler = require("../handlers/ForumQuestionHandler") 
const ForumQuestionFetch = require("../handlers/ForumQuestionFetchHandler")
const EditForumQuestionHandler = require("../handlers/EditForumQuestionHandler")
const ForumReactHandler = require("../handlers/ForumReactHandler")

//create
router.route('/add').post((request, response) => {ForumQuestionHandler(request, response); });

//update
router.route('/update/:id').put((request, response)=>{EditForumQuestionHandler(request,response);});

//fetch
router.route('/').get((request, response) => {ForumQuestionFetch(request, response); });

//update reacts
router.route('/reacts').put((request, response)=>{ForumReactHandler(request,response);});

module.exports = router;