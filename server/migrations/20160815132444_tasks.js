'use strict';

exports.up = function(knex, Promise) {
  return knex.schema.createTable('tasks', function(table) {
    table.increments();
    table.integer('hunt_id');
    table.string('name');
    table.integer('xp');
    table.integer('level_available');
    table.boolean('completed');
    table.boolean('unique');
    table.string('location');
    table.string('expiration');
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('tasks');
};
