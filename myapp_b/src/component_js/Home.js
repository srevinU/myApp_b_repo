import React, { useState } from 'react';
import "../component_css/Home.css";

const jsonProductTest = [
  {"product_id": "AAAAAAAAAA",
  "product_name": "Product A",
  "product_price": "Price A",
  "product_description": "Description A",
  "product_start": 3},
  {"product_id": "BBBBBBBBBB",
  "product_name": "Product B",
  "product_price": "Price B",
  "product_description": "Description B",
  "product_start": 3},
  {"product_id": "CCCCCCCCCC",
  "product_name": "Product C",
  "product_price": "Price C",
  "product_description": "Description C",
  "product_start": 3},
  {"product_id": "DDDDDDDDDD",
  "product_name": "Product D",
  "product_price": "Price D",
  "product_description": "Description D",
  "product_start": 3}
]


function Home() {
    return (
      <div className="home">
        {
        jsonProductTest.map(function (item, key) {
            return <div key={key}>
             <ul>
               <li>{item.product_id}</li>
               <li>{item.product_name}</li>
               <li>{item.product_price}</li>
               <li>{item.product_description}</li>
               <li>{item.product_start}</li>
             </ul>
            </div>
        })
        }
      </div>
    );
  }
  
  export default Home;