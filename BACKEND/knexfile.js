const path = require("path")


module.exports = {
    development: {
        client: 'pg',
        connection: {
          user : 'postgres',
          password : 'prs100502',
          database : 'manjeri'
        },
    migrations: {
        directory: path.resolve(__dirname, "src", "database", "migrations")
    },
    seeds: {
        directory: path.resolve(__dirname, "src", "database", "seeds")
    },

}
}

