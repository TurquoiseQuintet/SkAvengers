'use strict';

var router = require('express').Router();
var submitController=require('../controllers/submitController');

router.put('/:task_id/:user_id', submitController.submit)

module.exports = router;
