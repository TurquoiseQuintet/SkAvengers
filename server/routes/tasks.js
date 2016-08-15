'use strict';
var router = require('express').Router();
var serverController=require('../controllers/serverController');
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


router.get('/:task_id', serverController.gettask);


router.post('/user/:task_id', function(req, res, next){
  knex('tasks').where('id', req.params.task_id)
  .then(function(data) {
    //submit task to be reviewed by the admin
  })
  .catch(function(err) {
    console.log(err);
  });
});

router.post('/admin/:task_id', serverController.posttask)


router.delete('//:task_id', serverController.deletetask);


router.put('/admin/:task_id', serverController.edittask);

module.exports = router;
