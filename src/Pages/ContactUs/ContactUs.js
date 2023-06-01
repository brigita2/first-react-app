import './ContactUs.css'
import MapItem from "./Components/MapItem";
import ShopItem from "./Components/ShopItem";


function ContactUs() {
    return (
        <div className="container">
        <div className="content">
          <div className="shops-wrapper">
            <h1 className="shops-section-title">Find Us</h1>
            <div className="shops-list">
                <ShopItem title='Parduotuvė 1' phone={+370611111111}/>
                <ShopItem title='Parduotuvė 2' phone={+370622222222}/>
                <ShopItem title='Parduotuvė 3' phone={+370633333333}/>
                <ShopItem title='Parduotuvė 4' phone={+370644444444}/> 
            </div>
          </div>
                 <MapItem />
          
        </div>
      </div>
    )
}
export default ContactUs;