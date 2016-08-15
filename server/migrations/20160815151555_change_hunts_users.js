'use strict';

exports.up = function(knex, Promise) {
  return knex.schema.createTable('hunts_users', function(table) {
    table.increments();
    table.integer('hunts_id');
    table.integer('users_id');
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('hunts_users');
};
