'use strict';
var router = require('express').Router();

router.post('/', function(req, res, next){
  //as an admin, create a new task for the current hunt
});

router.get('/:task_id', function(req, res, next){
  //view a specific task
});

router.post('/user/:_task_id', function(req, res, next){
  //submit task to be reviewed by the admin
});

router.post('/admin/:task_id', function(req, res, next){
  //admin submit task as complete or not
});

router.delete('/:task_id', function(req, res, next){
  //as an admin, delete specific task
})

router.put('/:task_id', function(req, res, next){
  //as an admin, edit specific task
});

module.exports = router;
