import React, { useState, useEffect } from 'react';

export default function ManagementProducts() {

    const [products, setProducts] = useState([]);
    useEffect(() => {getProduct();}, []);

    function getProduct() {
        fetch('http://localhost:3001')
          .then(response => {
            // console.log(response);
            return response.json();
          })
          .then(data => {
            // console.table(data);
            setProducts(data);
          });}  

    return (
        <div className="management_products">
            <table>
                <tbody>

                {products.map((product, index) => {
                    console.log(product.u_name + "to display");
                    return <tr key={index}> 

                        {/* Issue with input when try to change value */}

                        <td> <input value={product.u_id} onChange={e => setProducts(e.target.product.u_id)}/> </td> 
                        <td> <input value={product.u_type}/> </td> 
                        <td> <input value={product.u_name}/> </td> 
                        <td> <input value={product.u_price}/> </td> 
                        <td> <input value={product.u_image_url}/> </td>
                        <td> <input value={product.u_description}/> </td>
                        <td> <input value={product.u_stars}/> </td>
                        <td> <input value={product.u_active}/> </td>
                        <td> <input value={product.u_nb_of_sell}/> </td>
                        <td> <input value={product.u_qty}/> </td> 
                    </tr>
                })}

                </tbody>

            </table>
            
            <button>Add</button>
            <button>Update</button>
            <button>Delete</button>

        </div>
    )
}
