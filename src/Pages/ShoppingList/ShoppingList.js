import { useState } from "react";
import Container from '../../Components/Container/Container';
// import './shoppingList.css'
import ShoppingItem from './Components/ShoppingItem';

function ShoppingList() {
  const shoppingList = [
    {
        title: 'Bread',
        done: true
    },
    {
        title: 'Sugar',
        done: true,
    },
    {
        title: 'Milk',
        done: false,
    },
    {
        title: 'Orange',
        done: false,
    },
    {
        title: 'Eggs',
        done: true,
    }
  ];
  
  const [ product, setProduct ] = useState(shoppingList);
  const [ newItem, setNewItem ] = useState('');

  const newItemHandler = (event) => {
    event.preventDefault();
    setProduct(prevState => {
        const newShoppingItem = {
            title: newItem,
            done: true,
        };

        if (newItem) {
        const newState = [newShoppingItem,...prevState];
        return newState;
    } else {
        return prevState;
    }
    });

    setNewItem('');
    // taip nuresetiname formą
  }

  const itemInputHandler = (event) => {
    setNewItem(event.target.value)
  };

  const itemDoneHandler = (index) => {
    setProduct(prevState => {
        const prevShoppingItem = prevState[index];
        const newEditItem = {...prevShoppingItem};
        newEditItem.done = !newEditItem.done;

        const newState = [...prevState];
        newState.splice(index, 1, newEditItem);

        return newState;

        // return prevState.toSpliced(index, 1, newEditItem);
    })
  }
  
    return (
        <Container>
           <form onSubmit={newItemHandler}>
            <label htmlFor="shopping-item">Add Item</label>
            <input type="text" id="shopping-item" name="shopping-item" value={newItem} onChange={itemInputHandler}/>
            <input type="submit" value="Create" />
           </form>
                <h2>{shoppingList && shoppingList.length > 0 ? 'Shopping List' : 'Your Shopping List is Empty'}</h2>
                {product && product.length > 0 && (
                    <ul>
                        {product.map((product, index) => {
                            const { title, done } = product;
                            return <ShoppingItem key={index} index={index} title={title} done={done} onTaskDone={itemDoneHandler}/>
                        })}
                     </ul>
                    )}
           
        </Container>
    )
}
export default ShoppingList;