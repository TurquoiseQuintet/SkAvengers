'use strict';
var jwt = require('jsonwebtoken');
var knex = require('../db/knex');

function deletetask(req, res) {
    knex('tasks').where('id', req.params.task_id).delete();
}

function gettask(req, res) {
    knex('tasks').where('id', req.params.task_id)
        .then(function(task) {
            res.send(task[0]);
        })
        .catch(function(err) {
            res.send(err);
        });
}

function posttask(req, res) {
  var insertArray = [];
  var id;
    knex('tasks').insert({
        hunt_id: req.body.hunt_id,
        name: req.body.name,
        xp: req.body.xp,
        level_available: req.body.level_available,
        unique: req.body.unique
    }).returning('id')
    .then(function(data){
      id = data;
      return knex('hunts_users').where('hunts_id', req.body.hunt_id);
    })
    .then(function(data){
      for(var i = 0; i < data.length; i++){
        insertArray.push({
          users_id: data[i].users_id,
          tasks_id: id,
          completed: false
        });
      }
      return knex('users_tasks').insert(insertArray);
    })
    .then(function(data){
      res.send(insertArray);
    })
    .catch(function(err){
      res.send(insertArray);
    });
}

function edittask(req, res) {
    knex('tasks').where({
            id: req.params.task_id
        })
        .update({
            name: req.body.name,
            xp: req.body.xp,
            level_available: req.body.level_available,
            completed: req.body.completed,
            location: req.body.location,
            expiration_time: req.body.expiration_time

        })
        .then(function() {
          return knex('tasks').where('id', req.params.task_id);
        })
        .then(function(data) {
          res.send(data);
        })
        .catch(function(err) {
            res.send(err);
        });
}

function getAlltasks(req, res) {
    knex('tasks')
        .then(function(data) {
            res.send(data);
        })
        .catch(function(err) {
            res.send(err);
        });
}

function getTasksForHunt(req, res){

  knex('tasks').where('hunt_id', req.params.hunt_id)
  .then(function(data){
    res.send(data);
  })

  .catch(function(err){
    res.send(err);
  });
}
function getTasksForHuntForUser(req, res){
  var tasks;
  var number;
  var hunt;
  var experience;
  knex('tasks').join('users_tasks', 'users_tasks.tasks_id', '=', 'tasks.id').where('hunt_id', req.params.hunt_id)
  .then(function(data){
    tasks = data;
    hunt = data[0].hunt_id;
    return knex('users').join('hunts', 'huntMaster_id', '=', 'users.id').where('hunts.id', data[0].hunt_id);
  })
  .then(function(data){
    number = data[0].phone_number;
    return knex('hunts_users').where('hunts_id', hunt).where('users_id', req.user.id);
  })
  .then(function(data){
    experience = data[0].experience;
    res.send({tasks: tasks, huntMasterNumber: number, experience: experience});
  })

  .catch(function(err){
    res.send(err);
  });
}

function usersTasks(req, res) {
  knex('users_tasks')
  .then(function(data) {
    res.send(data);
  })
  .catch(function(err) {
    res.send(err);
  });
}

module.exports = {
    gettask: gettask,
    deletetask: deletetask,
    posttask: posttask,
    getAlltasks: getAlltasks,
    edittask: edittask,
    getTasksForHunt: getTasksForHunt,
    usersTasks: usersTasks,
    getTasksForHuntForUser: getTasksForHuntForUser
};
