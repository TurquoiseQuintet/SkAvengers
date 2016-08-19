'use strict';
var knex = require('../db/knex');

var user;
var user_task;
var task;
var hunt;
var hunt_user;
function submit(req, res) {
  console.log("begin");
  knex('users').where('username', req.params.user_id)
  .then(function(data) {
    console.log("call 1");
    user = data[0];
    return knex('users_tasks').where('users_id', req.params.user_id).where('tasks_id', req.params.task_id);
  })
  .then(function(data) {
    console.log("call 2", data);
    user_task = data[0];
    return knex('tasks').where('id', data[0].tasks_id);
  })
  .then(function(data) {
    console.log("call 3", data);
    task = data[0];
    return knex('users_tasks').where('users_id', req.params.user_id).where('tasks_id', task.id).update({completed: true});
  })
  .then(function() {
    console.log("call 4");
    return knex('hunts').where('id', task.hunt_id);
  })
  .then(function(data) {
    console.log("call 5", data);
    hunt = data[0];
    return knex('hunts_users').where('hunts_id', hunt.id).where('users_id', req.params.user_id);
  })
  .then(function(data) {
    console.log("call 6", task);
    hunt_user = data[0];
    return knex('hunts_users').where('hunts_id', hunt.id).where('users_id', req.params.user_id).update({experience: (parseInt(data[0].experience) + parseInt(task.xp))});
  })
  .then(function() {
    console.log("call 7");
    if (task.unique) {
      return knex('users_tasks').where('tasks_id', task.id).update('completed', true);
    }
  })
  .then(function() {
    res.send('complete');
  })
  .catch(function(err) {
    console.log(err);
  });
}

module.exports = {
  submit: submit
};
