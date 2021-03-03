import "../component_css/Navbar.css"
import { BiSearchAlt } from 'react-icons/bi';


const logoOnClick = () => {
  console.warn("There is a click !");
}

function Navbar() {

    return (
      <div className="navbar">

        <div className="nav_logo">
          <div>My logo</div>
        </div>

        <div className="nav_search_bar">
          <input className="search_input"/>
          <div className="nav_search_logo" onClick= {logoOnClick}>
            <BiSearchAlt className="logos"/>
          </div>
        </div>
        
      </div>
    );
  }
  
  export default Navbar;

  