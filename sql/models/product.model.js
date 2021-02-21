const { Sequelize } = require("sequelize");
const sequelize = require('../connectDB');

const ProductModel = sequelize.define('product',{
    id : {
        type : Sequelize.STRING,
        autoIncrement : true,
        unique : true,
        allowNull : false,
        primaryKey : true
    },
    name : {
        type : Sequelize.STRING,
        allowNull :false
    },
    img : {
        type : Sequelize.STRING,
        allowNull : false
    },
    price : {
        type : Sequelize.DOUBLE,
        allowNull : false
    },
    desc : {
        type :Sequelize.TEXT,
        allowNull : false
    }
})

module.exports = ProductModel