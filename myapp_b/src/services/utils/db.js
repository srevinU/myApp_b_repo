const Pool = require('pg').Pool;

const pool = new Pool({
  user: 'cedricsegura',
  host: 'localhost',
  database: 'myApp_b_db',
  password: 'Akpg*',
  port: 5432
})

// const pool = new Pool({
//   user: process.env.REACT_APP_DB_USER,
//   host: process.env.REACT_APP_DB_HOST,
//   database: process.env.REACT_APP_DB_NAME,
//   password: process.env.REACT_APP_DB_PSW,
//   port: process.env.REACT_APP_DB_PORT
// })

// const pool = new Pool({
//   user: 'postgres',
//   host: 'localhost',
//   database: 'myApp_b_db',
//   password: 'Elephant1', 
//   port: 5432
// })

module.exports = pool;
