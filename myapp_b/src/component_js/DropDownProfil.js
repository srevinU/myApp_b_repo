import "../component_css/DropDownProfil.css"

function DropDownProfil(props) {


    let dropItems = null;

    switch (props.from) {
      case "basketLogo":
        
        dropItems = [{"element" : "Hello"}, {"element" : "Bye"}];

        break;

      case "userLogo":

        console.log("In the case")

        dropItems = [{"element" : "Hello"}, {"element" : "Bye"}];

        break;
    
      default:

        dropItems = [{"element" : "Hello"}, {"element" : "Bye"}];

        break;
    }

    console.log(props.from);
    console.log(dropItems);

    dropItems.map((item) => {
      console.log(item);
    })

    return (

      <div className={ props.clicked ? "dropDownProfilDisplayed" : "dropDownProfilHid"}>

        {
        dropItems.map(function (item, key) {
          return <p key={key}>{item.element}</p>
        })
        }
        
      </div>
    );
  }
  
  export default DropDownProfil;

  