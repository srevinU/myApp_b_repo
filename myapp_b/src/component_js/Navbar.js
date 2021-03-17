import React, { useState } from 'react';
import "../component_css/Navbar.css";
import { BiSearchAlt, BiBasket, BiUserCircle } from 'react-icons/bi';
import DropDownProfil from "./DropDownProfil";
import "../component_css/DropDownProfil.css";

function Navbar() {

  const [logoCliked, setlogoCliked] = useState(false);
  const [dropDownTriggeredBy, setdropDownTriggeredBy] = useState("");
  
  const triggerDropDownOption = (logoId) => {
      setdropDownTriggeredBy(logoId);
      setlogoCliked(!logoCliked);
    }
  
    return (
      <div className="navbar">

        <div className="nav_logo">
          <div>My logo</div>
        </div>

        <div className="nav_search_bar">
          <input className="search_input"/>
          <div className="nav_search_logo">
            <BiSearchAlt className="logos"/>
          </div>
        </div>

        <div className="nav_options">
          {/* <BiBasket className="logos" onClick= {() => triggerDropDownOption("basketLogo")}/> */}
          <BiUserCircle className="logos" onClick= {() => triggerDropDownOption("userLogo")}/>        
        </div>

        <DropDownProfil clicked={logoCliked} clickedFrom={dropDownTriggeredBy}/>

      </div>
    );
  }

  
  export default Navbar;

  