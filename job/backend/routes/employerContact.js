const express = require('express');
const router = express.Router()

const EmployerContactHander = require("../handlers/EmployerQuestionHandler")
const FetchInternQuestionHandler = require("../handlers/FetchInternQuestionsHandler")
const InternQuestionRemoveHandler = require("../handlers/InternQuestionRemoveHandler")

//create
router.route('/add').post((request, response) => {EmployerContactHander(request, response); });

//fetch all
router.route('/').get((request, response) => {FetchInternQuestionHandler(request, response); });

//remove
router.route('/:id').delete((request, response) => {InternQuestionRemoveHandler(request, response); });

module.exports = router;