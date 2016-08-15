
exports.up = function(knex, Promise) {
  return knex.schema.createTable('users_tasks', function(table) {
    table.increments();
    table.integer('users_id');
    table.integer('tasks_id');
    table.boolean('completed');
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('users_tasks');
};
