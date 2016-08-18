
exports.up = function(knex, Promise) {
  return knex.schema.table('tasks', function(table) {
    table.dropColumn('location');
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.table('tasks', function(table) {
    table.string('location');
  });
};
