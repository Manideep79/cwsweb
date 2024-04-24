const mysql = require('mysql');

// Create a MySQL connection pool
const pool = mysql.createPool({
  host: '127.0.0.1',
  user: 'root',
  password: 'password',
  database: 'reactjswebapplication',
});

module.exports = pool;


// // config/database.js
// const mysql = require('mysql');

// // Create a MySQL connection pool
// const pool = mysql.createPool({
//   host: 'cwsdatabase.c5yqu4yg2dxu.eu-north-1.rds.amazonaws.com',
//   user: 'cwsngo',
//   password: 'password',
//   database: 'reactjswebapplication',
// });

// module.exports = pool;



