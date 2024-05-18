const mysql = require('mysql');

const pool = mysql.createPool({
  connectionLimit: 10,
  host: 'localhost',
  user: 'root',
  password: '1597532684',
  database: 'nodemysql',
});

module.exports = pool;
