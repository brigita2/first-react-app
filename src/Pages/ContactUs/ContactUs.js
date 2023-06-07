import './ContactUs.css'
import MapItem from "./Components/MapItem";
import ShopItem from "./Components/ShopItem";
import Container from '../../Components/Container/Container';


function ContactUs() {

  const shopsData = [
    {
      title:'Parduotuvė 1',
      phone: '+370611111111',
      email:'info1@parduotuve.lt',
      address:'Vilniaus g. 20, Vilnius',
      addressLink:'/#',
    },
    {
      title:'Parduotuvė 2' ,
      phone: '+370622222222',
      email:'info2@parduotuve.lt',
      addressLink:'/#',
    },
    {
      title:'Parduotuvė 3',
      phone:'+370633333333',
      email:'info3@parduotuve.lt',
      address:'Vilniaus g. 22, Vilnius',
      addressLink:'/#',
    },
    {
      title:'Parduotuvė 4', 
      phone:'+370644444444',
      email:'info4@parduotuve.lt',
      address:'Vilniaus g. 23, Vilnius',
    }
  ];

    return (
        <Container>
            <div className="content">
              <div className="shops-wrapper">
                <h1 className="shops-section-title">Find Us</h1>
                <div className="shops-list">

                  {shopsData.map((shop, index) => {
                  return <ShopItem 
                  key = {index}
                  title={shop.title} 
                  phone= {shop.phone}
                  email= {shop.email}
                  address={shop.address}
                  addressLink= {shop.addressLink}
                  />
                  })}

                </div>
              </div>
                    <MapItem />
            </div>
        </Container>
    )
}
export default ContactUs;