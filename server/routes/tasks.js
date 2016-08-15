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

router.post('/user/:_task_id', );
=======
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
>>>>>>> 5be435c6ad9e49c4035c96c9a44260efde2e5540

router.post('/admin/:task_id', serverController.posttask){
  //admin submit task as complete or not
});

<<<<<<< HEAD
router.delete('//:task_id', serverController.deletetask);
=======
router.delete('/:task_id', function(req, res, next){
  //as an admin, delete specific task
});
>>>>>>> 5be435c6ad9e49c4035c96c9a44260efde2e5540

router.put('/admin/:task_id', serverController.edittask);

module.exports = router;
