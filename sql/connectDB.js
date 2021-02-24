const { Sequelize } = require("sequelize");

module.exports = new Sequelize('node-ecom-sql','root','',{
    dialect : 'mysql',
    host : 'localhost'
})