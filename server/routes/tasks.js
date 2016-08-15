'use strict';
var router = require('express').Router();
var serverController=require('../controllers/serverController');
var knex = require('./db/knex')


router.get('/tasks', serverController.getAlltasks);
router.get('/task/:task_id', serverController.gettask);

router.post('/task', serverController.posttask);


router.delete('/task/:task_id', serverController.deletetask);


router.put('/task/:task_id', serverController.edittask);
router.delete('/task/:task_id', serverController.deletetask);

module.exports = router;
