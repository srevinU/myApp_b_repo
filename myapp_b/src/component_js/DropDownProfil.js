import "../component_css/DropDownProfil.css"

function DropDownProfil(props) {


    let dropItems = [];

    switch (props.clickedFrom) {

      case "basketLogo":
        
        dropItems = [
          {"element" : "Hello"}, 
          {"element" : "Bye"}];

        break;

      case "userLogo":
        
        dropItems = [
        {"element" : "Your Profile", "display": true}, 
        {"element" : "Your Orders", "display": false}, 
        {"element" : "Contact Us", "display": true}, 
        {"element" : "Log Out", "display": true}
      ];

        break;
    
      default:
        console.warn("Component [DropDownProfil]: var 'props.from' Empty")
        break;
    };

    return (

      <div className={ props.clicked ? "dropDownProfilDisplayed" : "dropDownProfilHid"}>

        <ul>{
        dropItems.map(function (item, key) {
          if (item.display) {
            return <li key={key}>{item.element}</li>
          }
        })
        }</ul>
        
      </div>
    );
  }
  
  export default DropDownProfil;

  