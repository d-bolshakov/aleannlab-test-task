const Sequelize = require('sequelize')

const sequelize = new Sequelize({
    database: process.env.DB_DATABASE,
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    dialect: 'postgres'
})

module.exports = sequelize