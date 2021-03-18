// import React, { useState } from 'react';
import "../component_css/Home.css";
const jsonProductTest = require('../component_json/product_sample.json');

function Home() {

  let newContent = [];
  let finalContent = [];

  jsonProductTest.forEach((element, index) => {
    if (index !== 0 && index % 4 === 0) {
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
            {element.product_name}
          </td>
        })
      }
    </tr>
  })

  return (
   
  <table>
    <tbody>{content}</tbody>
  </table>
         
       
    

  );
}
  
  export default Home;





      //   <tr> elementRow.map((element, index) => {
      //     <td id={index}> {element.product_name} </td>
      //     </tr>})
      // })




    //   <div className="home">
    //     {
    //     jsonProductTest.map(function (item, key) {
    //         return <div className="product_panel" key={key}>
    //          <ul>
    //            <li>{item.product_id}</li>
    //            <li>{item.product_name}</li>
    //            <li>{item.product_price}</li>
    //            <li>{item.product_description}</li>
    //            <li>{item.product_stars}</li>
    //          </ul>
    //         </div>
    //     })
    //     }
    //   </div>