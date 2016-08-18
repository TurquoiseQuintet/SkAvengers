'use strict';
var knex = require('../db/knex');

var user;
var user_task;
var task;
var hunt;
var hunt_user;
function submit(req, res) {
  knex('users').where('username', req.params.user_id)
  .then(function(data) {
    user = data[0];
    return knex('users_tasks').where('users_id', user.id).where('tasks_id', req.params.task_id);
  })
  .then(function(data) {
    user_task = data[0];
    return knex('tasks').where('id', user_task.id);
  })
  .then(function(data) {
    task = data[0];
    return knex('users_tasks').where('users_id', user.id).where('tasks_id', task.id).update({completed: true});
  })
  .then(function() {
    return knex('hunts').where('id', task.hunt_id);
  })
  .then(function(data) {
    hunt = data[0];
    return knex('hunts_users').where('hunts_id', hunt.id).where('users_id', user.id);
  })
  .then(function(data) {
    hunt_user = data[0];
    return knex('hunts_users').where('hunts_id', hunt.id).where('users_id', user.id).update({experience: (parseInt(hunt_user.experience) + parseInt(task.xp))});
  })
  .then(function() {
    if (task.unique) {
      return knex('users_tasks').where('tasks_id', task.id).update('completed', true);
    }
  })
  .then(function() {
    console.log("complete");
  })
  .catch(function(err) {
    console.log(err);
  });
}

module.exports = {
  submit: submit
};
