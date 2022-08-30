const express = require('express');
const router = express.Router()

const ForumQuestionHandler = require("../handlers/ForumQuestionHandler") 

//create
router.route('/add').post((request, response) => {ForumQuestionHandler(request, response); });

module.exports = router;