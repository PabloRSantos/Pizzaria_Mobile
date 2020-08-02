

 async function up(knex){
    return knex.schema.createTable("categorias", table => {
        table.increments("id").primary()
        table.string("categoria").notNullable()
        table.integer("produtos").defaultTo(0)
    })
}

 async function down(knex){
    return knex.schema.dropTable("categorias")
}

module.exports = {up, down}

