'use strict';

var router = require('express').Router();
var leaderboardController=require('../controllers/leaderboardController');

router.get('/', leaderboardController.leaderboard);

module.exports = router;
