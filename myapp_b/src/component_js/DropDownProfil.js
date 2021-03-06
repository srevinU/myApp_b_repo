import "../component_css/DropDownProfil.css"

function DropDownProfil(props) {

    return (
      <div className={ props.clicked ? "dropDownProfilDisplayed" : "dropDownProfilHid"}>
        <p>Hello</p>
      </div>
    );
  }
  
  export default DropDownProfil;

  