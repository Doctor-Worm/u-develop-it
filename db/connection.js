const mysql = require('mysql2');

// Connect to database
const db = mysql.createConnection(
    {
        host: '127.0.0.1',
        // You MySQL username,
        user: 'root',
        // Your MySQL password,
        password: 'Jackson4!2016',
        database: 'election'
    },
    console.log('Connected to the election database.')
);

module.exports = db;