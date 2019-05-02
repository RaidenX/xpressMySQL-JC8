const mysql = require('mysql')

const conn = mysql.createConnection({
    user: 'devuser2',
    password: 'Mysql123',
    host: 'db4free.net',
    database: 'rc8expressmysql',
    port: '3306'
})

module.exports = conn