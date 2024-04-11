const mysql = require('mysql');

const connection = mysql.createConnection({
  host: '127.0.0.1',
  user: 'jm',
  password: '11111111',
  port :3306,
  database: 'jmweb'
});
module.exports = connection;