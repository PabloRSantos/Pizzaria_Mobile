const knex = require("../database/connections")
const fs= require('fs');
const path = require("path")

    exports.index = async (req, res) => {

        if(req.query.pesquisa){

            const limit = req.query.limit || 50
            const page = req.query.page || 1

            const skip = (page - 1) * limit

            if(req.query.categoria) {

            const products = await knex("products")
            .join("relacionamento", "products.id", "=", "relacionamento.product_id")
            .where("relacionamento.categoria_id", req.query.categoria)
            .where("tags", "like", `%${req.query.pesquisa}%`)
            .select("*")
            .offset(skip)
            .limit(limit)

            let count = await knex("products").where("tags", "like", `%${req.query.pesquisa}%`).count("id" , {as: 'count'})

            const pages = count[0].count / limit 

            return res.json({products, pages})
            
            } else {

                const products = await knex("products").where("tags", "like", `%${req.query.pesquisa}%`)
                .offset(skip)
                .limit(limit)

                let count = await knex("products").where("tags", "like", `%${req.query.pesquisa}%`).count("id" , {as: 'count'})

            const pages = count[0].count / limit

            return res.json({products, pages})

            }
        }

        if(req.query.categoria && !req.query.pesquisa) {
                const categorias = req.query.categoria
                const limit = req.query.limit || 50
                const page = req.query.page

                const skip = (page - 1) * limit
                
                const products = await knex("products")
                .join("relacionamento", "products.id", "=", "relacionamento.product_id")
                .join("categorias", "relacionamento.categoria_id", "=", "categorias.id")
                .where("relacionamento.categoria_id", categorias)
                .select("products.*", "relacionamento.*", "categorias.categoria")
                .offset(skip)
                .limit(limit)

                let count = await knex("products")
                .join("relacionamento", "products.id", "=", "relacionamento.product_id")
                .where("relacionamento.categoria_id", categorias)
                .count("products.id" , {as: 'count'})

            const pages = count[0].count / limit

            return res.json({products, pages})
            }

        if(req.query.tipo){
            const limit = req.query.limit || 8
            const page = req.query.page

            const skip = (page - 1) * limit

            const products = await knex("products")
            .join("relacionamento", "products.id", "=", "relacionamento.product_id")
            .orderBy(req.query.tipo, req.query.ordenar)
            .offset(skip)
            .limit(limit)
        

            let count = await knex("products").count("id" , {as: 'count'})

            const pages = count[0].count / limit
            

            return res.json({products, pages})
        }


        const products = await knex("products")
        .join("relacionamento", "products.id", "=", "relacionamento.product_id")
        .select("*")
        .distinctOn("product_id")
       

        let count = await knex("products").count("id" , {as: 'count'})

        const pages = count[0].count / 10

        return res.json({products, pages})
    }

    exports.create = async (req, res) => {

        let {
            produto,
            descricao,
            categorias,
        } = req.body



        let infos = await knex("categorias").whereIn("id", categorias).select("categoria")

        infos = infos.map(info => info.categoria).toString().replace(/,/g, " ")

        const tags = `${produto} ${descricao} ${infos}`
        const preco = req.body.preco.replace(",", ".")

        const product = {
            produto,
            preco,
            descricao,
            tags,
            imagem: req.file.filename
        }
        
        const trx = await knex.transaction() //se 1 insert n da certo, ele cancela o outro

        const idsProducts = await trx("products").insert(product).returning('id')

        const product_id = idsProducts[0]

        const relacionamento = await categorias
        .map(categoria => parseInt(categoria.split()))
        .map(categoria_id => ({
                categoria_id,
                product_id
        }
        ))


        await trx("relacionamento").insert(relacionamento)
        await trx.commit()

        return res.json({sucess: "Salvo com sucesso"})
    }

    exports.delete = async (req, res) =>{
        const id = req.params.id

        const imagem = await knex("products").where("id", id).select("imagem")

        await knex("products")
        .where({id: id})
        .del()

        fs.unlink(path.resolve(__dirname, "..", "..", "uploads", "products", imagem[0].imagem), function(){
            return res.json({message: "Excluido com sucesso"})
        })

    }


    exports.update = async(req, res) => {

        let query = JSON.stringify(req.query).replace("{", "").replace("}", "").split(":")
        query = query.toString().replace(/"+/g, '').split(",")

        await knex("products").where("id", query[1]).update(query[2], query[3])

        return res.json({message: "Sucesso"})
    }


