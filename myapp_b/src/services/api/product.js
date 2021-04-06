const express = require("express");
const pool = require("../utils/db.js");
const queries = require("../utils/productQueries.js");
const product = express();
const port = 3001;

// Request Body
product.use(express.json())
product.use(function (req, res, next) {
  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
  res.setHeader('Access-Control-Allow-Methods', 'GET,POST,PUT,DELETE,OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Access-Control-Allow-Headers');
  next();
});

// Post
product.post("/poduct/post", async (request, response) => {
  let result;
  
  try {
    let param = [
      request.body.u_type,
      request.body.u_name,
      request.body.u_price,
      request.body.u_description,
      request.body.u_stars 
    ]
    result = await pool.query(queries.INSERT, param)
    response.json(result);
    return response.status(200).json(result.rows);

  } catch (err) {
    console.error(err.message);
  }
})

// Get
product.get('/', (req, res) => {
  getProduct()
  .then(response => {
    res.status(200).send(response);
  })
  .catch(error => {
    res.status(500).send(error);
  })
})

product.listen(port, () => {
  console.log(`App running on port ${port}.`)
})

const getProduct = () => {
  return new Promise(function(resolve, reject) {
    pool.query(queries.SELECT_ALL, (error, results) => {
      if (error) {
        reject(error)
      }
      resolve(results.rows);
    })
  }) 
}