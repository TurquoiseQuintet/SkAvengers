'use strict';

var router = require('express').Router();
var submitController=require('../controllers/submitController');

router.put('/:user_id/:task_id', submitController.submit)

module.exports = router;
