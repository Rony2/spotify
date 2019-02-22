var mysql = require('mysql');

var connection = mysql.createConnection({
    host: 'db4free.net',
    user: 'root1234',
    password: 'rootroot',
    database: 'codahackerearth'
});

connection.connect();

/* 
connection.query('select * from spotify limit 2', function (error, results, fields) {
    if (error) throw error;
    console.log('The solution is: ', results[0]);
});
 */
module.exports = connection;