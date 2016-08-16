'use strict';

exports.up = function(knex, Promise) {
  return knex.schema.table('hunts', function(table) {
    table.dropColumn('expiration_time');
    table.dateTime('expiration');
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.table('hunts', function(table) {
    table.dropColumn('expiration');
    table.datetime('expiration_time');
  });
};
