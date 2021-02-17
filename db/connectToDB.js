const mysql = require('mysql2');

module.exports = mysql.createPool({
    host : 'localhost',
    user : 'root',
    database : 'node-ecom-sql',
    password : ''
})
.promise();