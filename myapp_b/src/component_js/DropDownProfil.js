import "../component_css/DropDownProfil.css"


function DropDownProfil(props) {

    let dropItems = [];

    switch (props.clickedFrom) {

      case "basketLogo":
        dropItems = require('../component_json/dropDown_profile_sample.json');
        break;

      case "userLogo":
        dropItems = require('../component_json/dropDown_profile_sample.json');
        break;
    
      default:
        break;
    };

    return (

      <div className={ props.clicked ? "dropDownProfilDisplayed" : "dropDownProfilHid"}>

        <ul>{
        dropItems.map(function (item, key) {
          if (item.display) {
            return <li key={key}> <a href= {item.path}>  {item.element} </a></li>
          } else {
            return null;
          }
        })
        }</ul>
        
      </div>
    );
  }
  
  export default DropDownProfil;

  