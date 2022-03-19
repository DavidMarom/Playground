const mysql = require('mysql2');

const pool = mysql.createPool({
    host: 'localhost',
    user: 'root',
    database: 'testb',
    password: 'qwerty78'
});

module.exports = pool.promise();