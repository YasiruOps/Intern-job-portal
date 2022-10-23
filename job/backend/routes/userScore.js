const express = require('express');
const router = express.Router()


const AdduserScoreHandler = require('../handlers/AdduserScoreHandler');
const getScore = require('../handlers/FetchuserScoreHandler');
const clearLeaderboardHandler = require ('../handlers/clearLeaderboardHandler');

//create
router.route('/').put((request, response) => {AdduserScoreHandler(request, response) });

//fetch
router.route('/:type').get((request, response) => {getScore(request, response) });

//delete
router.route('/').delete((request, response) => {clearLeaderboardHandler(request, response) });

module.exports = router;