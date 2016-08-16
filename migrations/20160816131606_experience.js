
exports.up = function(knex, Promise) {
  return knex.schema.table('hunts_users', function(table) {
    table.integer('experience');
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.table('hunts_users', function(table) {
    table.dropColumn('experience');
  })
};
