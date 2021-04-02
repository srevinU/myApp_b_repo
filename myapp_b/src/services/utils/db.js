const Pool = require('pg').Pool;

const pool = new Pool({
  user: 'cedricsegura',
  host: 'localhost',
  database: 'myApp_b_db',
  password: 'Akpg*',
  port: 5432
})

module.exports = pool;