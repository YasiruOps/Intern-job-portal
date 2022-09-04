const express = require('express');
const router = express.Router()


const AdduserScoreHandler = require('../handlers/AdduserScoreHandler');
const getScore = require('../handlers/FetchuserScoreHandler');

//create
router.route('/').put((request, response) => {AdduserScoreHandler(request, response) });

//fetch
router.route('/:type').get((request, response) => {getScore(request, response) });

module.exports = router;