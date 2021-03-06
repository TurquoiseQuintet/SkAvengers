'use strict';
var router = require('express').Router();
var taskController=require('../controllers/taskController');

router.get('/users_tasks', taskController.usersTasks);
router.get('/', taskController.getAlltasks);
router.get('/hunter/hunt/:hunt_id', taskController.getTasksForHuntForUser);
router.get('/hunt/:hunt_id', taskController.getTasksForHunt);
router.get('/:task_id', taskController.gettask);
router.post('/', taskController.posttask);
router.delete('/:task_id', taskController.deletetask);
router.put('/:task_id', taskController.edittask);

module.exports = router;
