'use strict';

var router = require('express').Router();
var leaderboardController=require('../controllers/leaderboardController');

router.get('/:hunt_id', leaderboardController.leaderboard);

module.exports = router;
