const { Sequelize } = require("sequelize/types");

module.exports = new Sequelize('node-ecom-sql','root','',{
    dialect : 'mysql',
    host : 'localhost'
})