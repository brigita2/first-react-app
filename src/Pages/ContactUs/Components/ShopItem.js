function ShopItem({ title, email, address, phone, addressLink }) {

if (!title) {
  return '';
}

const phoneElement = phone ? <li>Phone: <a href={`tel:${phone}`}>{phone}</a></li> : ''
const emailElement = email ? (<li>Email: <a href={`mailto:${email}`}>{email}</a></li>) : ('')  //paprasti skliaustai apgaubia funkcija ir return

let addressElement = '';
if (address) {
  if (addressLink) {
    addressElement = <li>Address: <a href={addressLink} target="_blank">{address}</a></li>;
  } else {
    addressElement = <li>Address: {address}</li>;
  }
}

    return (
        <div className="shop-item">
                <h2 className="shop-title">{title}</h2>
                <ul className="shop-address-list">
                  {phoneElement}
                  {emailElement}
                  {addressElement}
                </ul>
              </div>
    )
}
export default ShopItem;