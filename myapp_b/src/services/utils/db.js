const Pool = require('pg').Pool;
require('dotenv').config();

const pool = new Pool({
  user: process.env.REACT_APP_DB_USER,
  host: process.env.REACT_APP_DB_HOST,
  database: process.env.REACT_APP_DB_NAME,
  password: process.env.REACT_APP_DB_PSW,
  port: process.env.REACT_APP_DB_PORT
})

module.exports = pool;
