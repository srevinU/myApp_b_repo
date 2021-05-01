
import React from 'react'
import "../component_css/Management.css";

const managementData = require('../component_json/management_sample.json')

// console.table(managementData);

export default function management() {

    return (

        <div className="page_management">

            <div className="sections_management">

                {
                    managementData.map(function (item, key) {
                        if (item.display) {
                        return <div className="section section_products" key={key}> <h1>{item.element}</h1> <a className="button" href={item.path}> Select </a> </div>
                        } else {
                        return null;
                        }
                    })
                }

            </div>
        </div>
       
    )
}
