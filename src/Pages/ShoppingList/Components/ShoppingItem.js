import '../shoppingList.css';

function ShoppingItem( {title, done, onTaskDone, index} ) {
    const itemDoneHandler = () => {
       onTaskDone(index);

    //    ši funkcija sutvarko išbraukimą prekės. ontaskdone funcija,perduota. 
    }

        return <li onClick={itemDoneHandler} className={`shopping-item ${!done ? 'notAvailable' : 'available'}`}>{title}</li>
    }

export default ShoppingItem;