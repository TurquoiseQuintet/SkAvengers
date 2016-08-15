
exports.up = function(knex, Promise) {
  return knex.schema.createTable('hunts', function(table) {
    table.increments();
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('hunts');
};
