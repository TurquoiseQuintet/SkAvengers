
exports.up = function(knex, Promise) {
  return knex.schema.createTable('users', function(table) {
    table.increments();
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('users');
};
