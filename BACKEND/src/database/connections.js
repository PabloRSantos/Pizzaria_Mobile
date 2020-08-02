//const knexfile = require("../../knexfile")
const knex = require("knex")
require("dotenv/config")

const connection = knex({
    client: 'pg',
  connection: {
    host: process.env.HOST,
          user : process.env.USER_DB,
          password : process.env.PASSWORD,
          database : process.env.DATABASE,
          port: process.env.PORT_DB
  }
})

module.exports = connection