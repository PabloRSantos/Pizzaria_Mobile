const knex = require("../database/connections")

exports.index = async (req, res) => {
    const pedidos = await knex("pedidos")

    res.json(pedidos)

}

exports.create = async (req, res) => {
    const userId = req.userId

    const products = await knex("carrinho")
    .join("products", "products.id", "=", "carrinho.product_id")
    .where({user_id: req.userId, enviado: 1})

    if(products.length > 0) {
        return res.json({error: "Você deve aguardar seu primeiro pedido ser finalizado"})
    }

    await knex("pedidos").insert({user_id: userId})

    await knex("carrinho")
    .where("user_id", userId).update("enviado", 1)

    res.json({message: "Enviado com sucesos"})
}

exports.show = async(req, res) => {
    const {userId} = req.query


    const pedido = await knex("pedidos")
    .join("carrinho", "carrinho.user_id", "=", "pedidos.user_id")
    .join("products", "products.id", "=", "carrinho.product_id")
    .where("carrinho.user_id", userId)
    .select("pedidos.user_id", "pedidos.created_at", "products.*")

    res.json(pedido)

}

exports.delete = async(req, res) => {
    const {pedidoId} = req.query
    const userId = await knex("pedidos").where("id", pedidoId).del().returning("user_id")

    await knex("carrinho").where({user_id: userId[0], enviado: 1}).del()

    res.json({message: "Excluido com sucesso"})
}