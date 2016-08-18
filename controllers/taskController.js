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
    knex('task').insert({
        hunt_id: req.body.hunt_id,
        name: req.body.name,
        xp: req.body.xp,
        level_available: req.body.xp,
        completed: req.body.completed,
        unique: req.body.unique,
        location: req.body.location,
        expiration_time: req.body.expiration_time
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
  var tasks;
  knex('tasks').where('hunt_id', req.params.hunt_id)
  .then(function(data){
    tasks = data;
    return knex('users').join('hunts', 'huntMaster_id', '=', 'users.id').where('hunts.id', data[0].hunt_id);

  })
  .then(function(data){
    res.send({tasks: tasks, huntMasterNumber: data[0].phone_number});
  })
  .catch(function(err){
    res.send(err);
  });
}

module.exports = {
    gettask: gettask,
    deletetask: deletetask,
    posttask: posttask,
    getAlltasks: getAlltasks,
    edittask: edittask,
    getTasksForHunt: getTasksForHunt
};
