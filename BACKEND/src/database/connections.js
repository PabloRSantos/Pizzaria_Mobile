//const knexfile = require("../../knexfile")
const knex = require("knex")
//require("dotenv/config")

const connection = knex({
    client: 'pg',
  connection: {
    user : 'postgres',
    password : 'prs100502',
    database : 'manjeri'
  }
})

module.exports = connection