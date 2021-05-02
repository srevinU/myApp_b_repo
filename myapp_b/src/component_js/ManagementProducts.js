import React, { useState, useEffect } from 'react';
import "../component_css/ManagementProducts.css";

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
            console.table(data);
            setProducts(data);
          });}

    function handleChange(e, field, index) {
        products[index][field] = e.target.value;
        setProducts(products);
    }

    function addProduct() {

        // Issue with function, record not added to the sreen, only in json (DOM issue)
        
        products.push({
            "u_type": "Created",
            "u_name": "",
            "u_price": "",
            "u_image_url": null,
            "u_description": "",
            "u_stars": 0,
            "u_active": "",
            "u_nb_of_sell": "",
            "u_qty": "",
            "sys_action": "create"

        });
        setProducts(products);
        console.table(products);
    }

    return (

        <div className="management_products">

            <table className="table_products">

                <thead>

                    <tr>
                        <th colSpan="1">Id</th>
                        <th colSpan="1">Type</th>
                        <th colSpan="1">Name</th>
                        <th colSpan="1">Price</th>
                        <th colSpan="1">Image</th>
                        <th colSpan="1">Description</th>
                        <th colSpan="1">Stars</th>
                        <th colSpan="1">Active</th>
                        <th colSpan="1">Number of sells</th>
                        <th colSpan="1">Quantity</th>
                    </tr>

                </thead>

                <tbody>

                {products.map((product, index) => {
                    console.log(product.u_type + " to display");
                    return <tr key={index}> 

                        <td> <input defaultValue={product.u_id} onChange={e => handleChange(e, "u_id", index)}/> </td> 
                        <td> <input defaultValue={product.u_type} onChange={e => handleChange(e, "u_type", index)}/> </td> 
                        <td> <input defaultValue={product.u_name} onChange={e => handleChange(e, "u_name", index)}/> </td> 
                        <td> <input defaultValue={product.u_price} onChange={e => handleChange(e, "u_price", index)}/> </td> 
                        <td> <input defaultValue={product.u_image_url} onChange={e => handleChange(e, "u_image_url", index)}/> </td>
                        <td> <input defaultValue={product.u_description} onChange={e => handleChange(e, "u_description", index)}/> </td>
                        <td> <input defaultValue={product.u_stars} onChange={e => handleChange(e, "u_stars", index)}/> </td>
                        <td> <input defaultValue={product.u_active} onChange={e => handleChange(e, "u_active", index)}/> </td>
                        <td> <input defaultValue={product.u_nb_of_sell} onChange={e => handleChange(e, "u_nb_of_sell", index)}/> </td>
                        <td> <input defaultValue={product.u_qty} onChange={e => handleChange(e, "u_qty", index)}/> </td> 
                    </tr>
                })}

                </tbody>

            </table>
            
            <button onClick={addProduct}>Add</button>
            <button>Update</button>
            <button>Delete</button>

        </div>

    )
}
