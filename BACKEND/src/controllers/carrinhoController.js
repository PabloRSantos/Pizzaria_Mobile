const knex = require("../database/connections")

exports.addCarrinho = async (req, res) => {

      req.body.user_id = req.userId

      await knex("carrinho").insert(req.body)
      
      return res.json({success: "Adicionado com sucesso!"})
  }

  exports.removeCarrinho = async (req, res) => {
      
      const product_id = req.query.product_id.split(",")
      const user_id = req.userId

      let dados = await knex("carrinho")
      .where("user_id", user_id)
      .whereIn("product_id", product_id)
      .select("carrinho_id")

      dados = dados.map(dado => dado.carrinho_id)

      await knex("carrinho").whereIn("carrinho_id", dados).del()

      return res.json({success: "Excluido com sucesso"})
  }

  exports.showProducts = async (req, res) => {

    const products = await knex("carrinho")
    .join("products", "products.id", "=", "carrinho.product_id")
    .where({user_id: req.userId, enviado: 0})

    if(products.length === 0) {
      return res.json({message: "Nenhum produto encontrado"})
    }

    return res.json(products)
  }
