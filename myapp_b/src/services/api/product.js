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
product.post("/poduct/post", async (req, res) => {
  let result;
  try {
    let param = [
      req.body.u_type,
      req.body.u_name,
      req.body.u_price,
      req.body.u_image_url,
      req.body.u_description,
      req.body.u_stars,
      req.body.u_active,
      req.body.u_nb_of_sell,
      req.body.u_qty,
    ]
    result = await pool.query(queries.INSERT, param)
    res.json(result);
    return res.status(200).json(result.rows);

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

const getProduct = () => {
  return new Promise((resolve, reject) => {
    pool.query(queries.SELECT_ALL, (error, results) => {
      if (error) {
        reject(error.message)
      }
      resolve(results.rows);
    })
  }) 
}

product.listen(port, () => {
  console.log(`App running on port ${port}.`)
})
