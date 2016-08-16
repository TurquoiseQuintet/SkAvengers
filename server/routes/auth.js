'use strict';
var router = require('express').Router();
var authController=require('../controllers/authController');


router.post('/', authController.addUser);
router.get('/', authController.checklogin);

module.exports = router;
