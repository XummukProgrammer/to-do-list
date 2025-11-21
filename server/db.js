const {Sequelize} = require('sequelize')

const NAME = process.env.DB_NAME
const HOST = process.env.DB_HOST
const PORT = process.env.DB_PORT
const USER = process.env.DB_USER
const PASS = process.env.DB_PASS

module.exports = new Sequelize(NAME, USER, PASS, {
    dialect: 'postgres',
    host: HOST,
    port: PORT
})
