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
    let result: any;
    const client = await this.pool.connect()
    result = await client.query(sqlQuery, param);
    client.release();
    console.log("Query executed:", sqlQuery);
    return result.rows;
  }

  async disconnection() {
    await this.pool.end();
    console.log("Pool disconnected")
  }

}

export {
  myPgPoolUtils
}
