

 exports.up = knex => {
    return knex.schema.createTable("products", table => {
        table.increments("id").primary()
        table.string("produto").notNullable()
        table.decimal("preco").notNullable()
        table.string("descricao").notNullable()
        table.string("imagem").notNullable()
        table.string("tags")
    })
}

 exports.down = knex => {
    return knex.schema.dropTable("products")
}



