const express = require("express");
const bodyParser = require("body-parser");
const queries = require("../utils/productQueries.js");
const product = express();
const port = 5432;


product.use(bodyParser.json())
product.use(
  bodyParser.urlencoded({
    extended: true,
  })
)







console.log(queries.SELECT_ALL)
