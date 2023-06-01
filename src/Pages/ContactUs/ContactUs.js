import MapItem from "./Components/MapItem";
import ShopItem from "./Components/ShopItem";

function ContactUs() {
    return (
        <div className="container">
        <div className="content">
          <div className="shops-wrapper">
            <h1 className="shops-section-title">Find Us</h1>
            <div className="shops-list">
                <ShopItem></ShopItem>
                <ShopItem></ShopItem>
                <ShopItem></ShopItem>
                <ShopItem></ShopItem>  
            </div>
                 <MapItem></MapItem>
          </div>
          
        </div>
      </div>
    )
}
export default ContactUs;