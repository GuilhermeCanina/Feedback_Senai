const mysql = require('mysql');

const con = mysql.createConnection({
    host: 'localhost',
    database: 'feedbacks',
    user: 'root'
});

module.exports = con;