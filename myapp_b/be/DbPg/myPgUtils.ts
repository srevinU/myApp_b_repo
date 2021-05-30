import { Pool } from 'pg';
require('dotenv').config();

class myPgPoolUtils {

  pool: Pool;
  constructor (user?: string, host?: string, database?: string, password?: string, port?: number) {

    this.pool = new Pool({
      user: !user ? process.env.REACT_APP_DB_USER : user,
      host: !host ? process.env.REACT_APP_DB_HOST : host,
      database: !database ? process.env.REACT_APP_DB_NAME : database,
      password: !password ? process.env.REACT_APP_DB_PSW : password,
      port: port ? port : 5432
      /*
      max: 10,
      maxUses: Infinity,
      idleTimeoutMillis: 10000 
      */
    })

  }

  async query(sqlQuery:string, param?: Array <string|number|boolean|null|undefined>) {

    this.pool.connect((err, client, release) => {
      if (err) {
        return console.error('Error acquiring client', err.stack);
      }
      client.query(sqlQuery, param, (err, result) => {
        release();
        if (err) {
          console.error('Error executing query', err.stack);
          throw err;
        }
        console.log("Query executed:", sqlQuery);
        return result.rows;
      })
    })
  }

  async disconnection() {
    await this.pool.end();
    console.log("Pool disconnected")
  }

}

export {
  myPgPoolUtils
}
