'use strict';
var router = require('express').Router();
var serverController=require('../controllers/serverController');

router.post('/', function(req, res, next){
  //as an admin, create a new task for the current hunt
});

router.get('/:task_id', serverController.gettask);

router.post('/user/:_task_id', );

router.post('/admin/:task_id', serverController.posttask){
  //admin submit task as complete or not
});

router.delete('//:task_id', serverController.deletetask);

router.put('/admin/:task_id', serverController.edittask);

module.exports = router;
