'use strict';
exports.up = function(knex, Promise) {
  return knex.schema.dropTable('users-tasks');
};

exports.down = function(knex, Promise) {
  return knex.schema.createTable('users-tasks', function(table) {
    table.increments();
    table.integer('users_id');
    table.integer('tasks_id');
  });
};
