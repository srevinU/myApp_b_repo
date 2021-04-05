import React, { useEffect } from 'react';

import "../component_css/Home.css";
const jsonProductTest = require("../component_json/product_sample.json");



function Home() {

  useEffect(() => {
    console.log(getProduct());
  }, []);


function getProduct() {
  fetch('http://localhost:3001')
    .then(response => {
      console.log(response);
      return response.text();
    })
    .then(data => {
      console.log(data)
      // setMerchants(data);
    });}
  







  let newContent = [];
  let finalContent = [];

  jsonProductTest.forEach((element, index) => {
    if (index !== 0 && index % 3 === 0) {
        finalContent.push(newContent);
        newContent = [element];
    } else {
        newContent.push(element);
    }
  });

  finalContent.push(newContent);

  const content = finalContent.map((elementRow, indexElementRow) => {
    return <tr key={indexElementRow}>
      {
        elementRow.map((element, indexElement) => {
          return <td key={indexElement}>
            <ul>
                <li className= "product_name">{element.name}</li>
                <li className="product_image">{element.image}
                <img className="product_image" src="/img/galina-n-miziNqvJx5M-unsplash.jpg" alt="test" id="itemImg"/>
                </li>
                <li className="product_description">
                  <p>{element.description}</p>
                  </li>
                <li className="product_stars">
                  {element.stars}
                  </li>
                <li className="product_price">{element.price}</li>
              </ul>
          </td>
        })
      }

    </tr>
    
  })

  return (
   
    <div className="home">
      <table>
        <tbody>{content}</tbody>
      </table>
  </div>
         
       
    

  );
}
  
  export default Home;
