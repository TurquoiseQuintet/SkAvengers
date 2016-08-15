
exports.up = function(knex, Promise) {
  return knex.schema.table('tasks', function(table) {
    table.dropColumn('expiration');
    table.datetime('expiration_time');
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.table('tasks', function(table) {
    table.dropColumn('expiration_time');
    table.string('expiration');
  });
};
