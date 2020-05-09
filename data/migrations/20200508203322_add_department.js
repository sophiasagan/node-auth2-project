exports.up = async function(knex) {
    await knex.schema.table('users', function(t) {
        t.text('department').notNull().defaultTo('new_hire');
    });
};

exports.down = async function(knex) {
    await knex.schema.table('users', function(t) {
        t.dropColumn('department');
    });
};