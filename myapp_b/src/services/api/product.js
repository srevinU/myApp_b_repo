const express = require("express");
const pool = require("../utils/db.js");
const queries = require("../utils/productQueries.js");
const product = express();

// Request Body
product.use(express.json())

product.post("/poduct/post", async (request, response) => {
  let result;
  
  try {

    let param = request.body;
    result = await pool.query(queries.INSERT, param)
  
    response.json(result);
    
    return response.status(200).json(result.rows);

  } catch (err) {

    console.error(err.message);

  }
})



product.listen(pool.port, () => {
  console.log(`App running on port ${pool.port}.`)
})