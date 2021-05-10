import React, { useState, useEffect } from 'react';
import "../component_css/Home.css";

function Home() {

  const [products, setProducts] = useState([]);
  useEffect(() => {getProduct();}, []);

  function getProduct() {
    console.log(process.env);
    fetch('http://localhost:3001')
      .then(response => {
        console.log(response);
        return response.json();
      })
      .then(data => {
        console.table(data);
        setProducts(data);
      });}  

    function generateProductTableList(productArr) {
      let newContent = [];
      let finalContent = [];
      productArr.forEach((element, index) => {
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
                    <li className= "product_name">{element.u_name}</li>
                    <li className="product_image">{element.u_image}
                    <img className="product_image" src="/img/galina-n-miziNqvJx5M-unsplash.jpg" alt="test" id="itemImg"/>
                    </li>
                    <li className="product_description">
                      <p>{element.u_description}</p>
                      </li>
                    <li className="product_stars">
                      {element.u_stars}
                      </li>
                    <li className="product_price">{element.u_price + "€"}</li>
                  </ul>
              </td>
            })
          }
        </tr>
      })
      return content;
    }
  return (
  
    <div className="home">
      <table>
        <tbody>{generateProductTableList(products)}</tbody>
      </table>
  </div>
        
  );
}
  
export default Home;
