
exports.seed = async (knex) => {

    await knex("categorias").del()

    await knex("categorias").insert([
       {categoria: "Tradicionais", produtos: 0},
       {categoria: "Da casa", produtos: 0},
       {categoria: "Especiais", produtos: 0},
       {categoria: "Premium", produtos: 0},
       {categoria: "Doces", produtos: 0},
       {categoria: "Entradas", produtos: 0},
       {categoria: "Saladas", produtos: 0},
       {categoria: "Bebidas", produtos: 0},
    ])

}
