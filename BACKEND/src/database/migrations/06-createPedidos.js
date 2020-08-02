

 async function up(knex){
    return knex.schema.createTable("pedidos", table => {
        table.increments("id").primary()
        table.timestamp('created_at').defaultTo(knex.fn.now());

        table.integer("user_id")
        .notNullable()
        .references('id')
        .inTable("users")

    })
}

 async function down(knex){
    return knex.schema.dropTable("pedidos")
}

module.exports = {up, down}

