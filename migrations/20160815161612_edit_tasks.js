
exports.up = function(knex, Promise) {
  return knex.schema.table('tasks', function(table) {
    table.dropColumn('completed');
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.table('tasks', function(table) {
    table.boolean('completed');
  });
};
