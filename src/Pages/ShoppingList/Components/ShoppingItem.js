import '../shoppingList.css';

function ShoppingItem( {title, index, done} ) {
        return <li key={index} className={!done ? 'notAvailable' : 'available'}>{title}</li>
    }

export default ShoppingItem;