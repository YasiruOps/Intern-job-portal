const express = require('express');
const router = express.Router()


const McqTypeHandler = require('../handlers/McqTypeHandler');
const McqNameHandler = require('../handlers/McqNameHandler');
const AddMcqCategoryHandler = require('../handlers/AddMcqCategoryHandler');
const GetQuiz = require('../handlers/GetQuiz');

//fetch
router.route('/type').get((request, response) => {McqTypeHandler(request, response); });

router.route('/:type/name').get((request, response) => {McqNameHandler(request, response); });

router.route('/:type/quiz').get((request, response) => {GetQuiz(request, response); });

//create
router.route('/').post((request, response) => {AddMcqCategoryHandler(request, response); });

module.exports = router;