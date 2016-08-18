
exports.up = function(knex, Promise) {
  return knex.schema.table('hunts', function(table) {
    table.dropColumn('xp_to_level_up');
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.table('hunts', function(table) {
    table.integer('xp_to_level_up');
  });
};
