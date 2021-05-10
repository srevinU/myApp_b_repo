/* eslint-disable array-callback-return */
import React, { useState, useEffect } from 'react';
import "../component_css/ManagementProducts.css";
import { RiDeleteBinLine } from 'react-icons/ri';


export default function ManagementProducts() {

    const [products, setProducts] = useState([]);
    
    useEffect(() => {
        getProduct();
    }, []);

    function getProduct() {
        fetch('http://localhost:3001')
          .then(response => {
            return response.json();
          })
          .then(data => {
            setProducts(data);
          });}

    function saveProducts() {

        let productsToSave = products.filter((p) => {
            return p.sys_action === "created" || p.sys_action === "deleted"
        });
        console.log(productsToSave);

        productsToSave.forEach((p) => {

            switch (p.sys_action) {

                case "created":

                    fetch('http://localhost:3001/poduct/post', {
                            method: "POST",
                            headers: {"Content-type": "application/json"},
                            body: JSON.stringify(p)
                        })
                        .then(response => {
                            return response.json();
                        })

                    break;

                case "deleted":

                    fetch('http://localhost:3001/poduct/del', {
                            method: "DELETE",
                            headers: {"Content-type": "application/json"},
                            body: JSON.stringify(p)
                        })
                        .then(response => {
                            return response.json();
                        })
                    break;

                default:
                    break;
            }

        })

    }

    function handleChange(event, field, index) {
        products[index][field] = event.target.value;
        setProducts(products);
    }

    function addProduct() {
    
        setProducts([...products, {
            "u_type": "",
            "u_name": "",
            "u_price": 0,
            "u_image_url": null,
            "u_description": "",
            "u_stars": 0,
            "u_active": true,
            "u_nb_of_sell": 0,
            "u_qty": 0,
            "sys_action": "created"
        }]);
 
    }

    function deleteProduct(index) {

        let newProducts = [...products];
        let answer;
        
        if (newProducts[index].u_id)  {
            answer = window.confirm("Do you confirm to delete this product " + newProducts[index].u_name + ", Reference " + newProducts[index].u_id + "?")
        } else {
            answer = window.confirm("Do you confirm to delete this product ?");
        }
        
        if (answer === true) {
            newProducts[index].sys_action = "deleted";
            setProducts(newProducts);
        }

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
                    if (!product.sys_action || product.sys_action !== "deleted") {
                        return <tr key={index}> 
                            <td> <input defaultValue={product.u_id} onChange={event => handleChange(event, "u_id", index)} readOnly={true}/> </td> 
                            <td> <input defaultValue={product.u_type} onChange={event => handleChange(event, "u_type", index)}/> </td> 
                            <td> <input defaultValue={product.u_name} onChange={event => handleChange(event, "u_name", index)}/> </td> 
                            <td> <input defaultValue={product.u_price} onChange={event => handleChange(event, "u_price", index)}/> </td> 
                            <td> <input defaultValue={""} type="file" onChange={event => handleChange(event, "u_image_url", index)}/> </td>
                            <td> <input defaultValue={product.u_description} onChange={event => handleChange(event, "u_description", index)}/> </td>
                            <td> <input defaultValue={product.u_stars} onChange={event => handleChange(event, "u_stars", index)}/> </td>
                            <td> <input defaultValue={product.u_active} type="checkbox" onChange={event => handleChange(event, "u_active", index)}/> </td>
                            <td> <input defaultValue={product.u_nb_of_sell} onChange={event => handleChange(event, "u_nb_of_sell", index)} readOnly={true}/> </td>
                            <td> <input defaultValue={product.u_qty} onChange={event => handleChange(event, "u_qty", index)} readOnly={true}/> </td> 
                            <td className="td_logo"> <RiDeleteBinLine onClick={() => deleteProduct(index)} className="logos"/> </td>
                        </tr>
                    }
                })}

                </tbody>

            </table>
            
            <div className="btn_container">
                <button onClick={addProduct}>Add product</button>
                <button onClick={() => saveProducts(products)}>Save</button>
            </div>
           

        </div>

    )
}
