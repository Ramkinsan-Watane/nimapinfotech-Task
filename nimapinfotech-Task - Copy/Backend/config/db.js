const mysql = require('mysql2');

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root', // my MySQL user
    password: 'root', // my MySQL password
    database: 'ProductCatalog'
});

connection.connect((err) => {
    if (err) throw err;
    console.log('Connected to the database!');
});

module.exports = connection;
