const express = require("express");
const pool = require("../utils/db.js");
const queries = require("../utils/productQueries.js");
const product = express();
const port = 3000;

// Request Body
product.use(express.json())

product.post("/todo", async (request, response) => {
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



const getUser = function () {

  return new(Promise)(async () => {
    let result;

    try {

      result = await pool.query(queries.SELECT_ALL);

      console.log(result.rows);

      return result.rows;

    } catch (err) {

      console.error(err.message);

    }

  })
}


const dataProductInDb = getUser();

console.log(dataProductInDb);



product.listen(port, () => {
  console.log(`App running on port ${port}.`)
})