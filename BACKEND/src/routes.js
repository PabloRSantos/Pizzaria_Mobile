const express = require("express")

const productsController = require("./controllers/productsController")
const categoriasController = require("./controllers/categoriasController")
const usersController = require("./controllers/usersController")
const carrinhoController = require("./controllers/carrinhoController")
const pedidosController = require("./controllers/pedidosController")

const authMiddleware = require("./middlewares/auth")
const multer = require("multer")
const multerConfig = require("./config/multer")

const uploadProduct = multer(multerConfig.product)
const uploadUser = multer(multerConfig.user)



const rota = express.Router()


rota.get("/categorias",categoriasController.index)


rota.get("/products", productsController.index)

rota.post("/products", uploadProduct.single("imagem"), productsController.create)

rota.delete("/products/:id", productsController.delete)

rota.put("/products", authMiddleware, productsController.update)





rota.post("/login", usersController.login)

rota.post("/cadastro", usersController.cadastro)

rota.put("/user/profilePic", authMiddleware, uploadUser.single("foto"), usersController.profilePic)

rota.get("/user", authMiddleware, usersController.perfil)



rota.get("/carrinho",  authMiddleware, carrinhoController.showProducts)

rota.post("/carrinho", authMiddleware, carrinhoController.addCarrinho)

rota.delete("/carrinho", authMiddleware, carrinhoController.removeCarrinho)


rota.get("/pedidos",  authMiddleware, pedidosController.index)

rota.get("/pedido",  authMiddleware, pedidosController.show)

rota.post("/pedido", authMiddleware, pedidosController.create)

rota.delete("/pedido", authMiddleware, pedidosController.delete)


module.exports = rota

