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
            // console.log(response);
            return response.json();
          })
          .then(data => {
            console.table(data);
            setProducts(data);
          });}

    function handleChange(event, field, index) {
        products[index][field] = event.target.value;
        setProducts(products);
    }

    function addProduct() {
    
        setProducts([...products, {
            "u_type": "Created",
            "u_name": "",
            "u_price": "",
            "u_image_url": null,
            "u_description": "",
            "u_stars": 0,
            "u_active": "",
            "u_nb_of_sell": "",
            "u_qty": "",
            "sys_action": "created"
        }]);
 
    }

    function deleteProduct(index) {

        let newProducts = [...products];
        newProducts[index].sys_action = "deleted";
        setProducts(newProducts);

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
                            <td> <input defaultValue={product.u_image_url} type="file" onChange={event => handleChange(event, "u_image_url", index)}/> </td>
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
                <button >Save</button>
            </div>
           

        </div>

    )
}
