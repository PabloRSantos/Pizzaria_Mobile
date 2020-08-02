const express = require("express")
const rotas = require("./routes")
const path = require("path")
require("dotenv/config")
const cors = require("cors")


const app = express()

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended: true}))

app.use(rotas)

app.use("/uploads/products", express.static(path.resolve(__dirname, "..", "uploads", "products")))
app.use("/uploads/user", express.static(path.resolve(__dirname, "..", "uploads", "user")))

app.listen(process.env.PORT || 3333, () => console.log("servidor rodando"))
