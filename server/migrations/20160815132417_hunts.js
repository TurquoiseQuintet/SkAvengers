'use strict';

exports.up = function(knex, Promise) {
  return knex.schema.createTable('hunts', function(table) {
    table.increments();
    table.integer('huntMaster_id');
    table.string('name');
    table.string('expiration');
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('hunts');
};
