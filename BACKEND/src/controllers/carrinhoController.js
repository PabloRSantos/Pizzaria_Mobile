const knex = require("../database/connections")

exports.addCarrinho = async (req, res) => {

      req.body.user_id = req.userId

      await knex("carrinho").insert(req.body)
      
      return res.json({success: "Adicionado com sucesso!"})
  }

  exports.removeCarrinho = async (req, res) => {
      
      const product_id = req.query.product_id.split(",")
      const user_id = req.userId

      const products = await knex("carrinho")
      .first()
      .where("user_id", user_id)
      .whereIn("product_id", product_id)

      await knex("carrinho").where("carrinho_id", products.carrinho_id).del()

      return res.json({success: "Excluido com sucesso"})
  }

  exports.showProducts = async (req, res) => {

    const products = await knex("carrinho")
    .join("products", "products.id", "=", "carrinho.product_id")
    .where({user_id: req.userId, enviado: 0})
 
    let count = await knex("carrinho").where({user_id: req.userId, enviado: 0}).count("carrinho_id" , {as: 'count'})

        const pages = count[0].count / 10

        return res.json({products, pages})

  }
