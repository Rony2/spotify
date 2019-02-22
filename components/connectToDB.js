var mysql = require('mysql');

var connection = mysql.createConnection({
    host: 'db4free.net',
    user: 'root1234',
    password: 'rootroot',
    database: 'codahackerearth'
});

connection.connect();

module.exports = connection;