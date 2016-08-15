'use strict';
var router = require('express').Router();
var knex = require('./db/knex')

router.post('/', function(req, res, next){
  knex('tasks').where('user_id', req.user.id)
  .then(function(data) {
    res.json(data);
  })
  .catch(function(err) {
    console.log(err);
  });
  //as an admin, create a new task for the current hunt
});

router.get('/:task_id', function(req, res, next){
  knex('tasks').where('id', req.body.task_id)
  .then(function(data) {
    res.json(data);
  })
  .catch(function(err) {
    console.log(err);
  });
  //view a specific task
});

router.post('/user/:task_id', function(req, res, next){
  knex('tasks').where('id', req.params.task_id)
  .then(function(data) {
    //submit task to be reviewed by the admin
  })
  .catch(function(err) {
    console.log(err);
  });
});

router.post('/admin/:task_id', function(req, res, next){
  //admin submit task as complete or not
});

router.delete('/:task_id', function(req, res, next){
  //as an admin, delete specific task
});

router.put('/:task_id', function(req, res, next){
  //as an admin, edit specific task
});

module.exports = router;
