import React, { useState } from 'react';
import "../component_css/Navbar.css";
import { BiSearchAlt, BiBasket, BiUserCircle } from 'react-icons/bi';
import DropDownProfil from "./DropDownProfil";
import "../component_css/DropDownProfil.css";



function Navbar() {

  const [clickProfile, setClickProfile] = useState(false);
  const [clickBasket, setClickBasket] = useState(false);

  
  // const logoOnClickProfilOption = () => {
  //   setClickProfile(!clickProfile);
  // }

  // const logoOnClickBasketOption = () => {
  //   setClickBasket(!setClickBasket);
  // }

  const logoOnClickOption = () => {
      setClickProfile(!clickProfile);
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

        
        {/* <BiBasket className="logos" id="basketLogo" onClick= {logoOnClickBasketOption}/>
        <BiUserCircle className="logos" id="userLogo" onClick= {logoOnClickProfilOption}/> */}

        <BiBasket className="logos" id="basketLogo" onClick= {logoOnClickOption}/>
        <BiUserCircle className="logos" id="userLogo" onClick= {logoOnClickOption}/>
        
        </div>

        <DropDownProfil clicked={clickProfile} from={"userLogo"}/>

      </div>
    );
  }

  
  export default Navbar;

  