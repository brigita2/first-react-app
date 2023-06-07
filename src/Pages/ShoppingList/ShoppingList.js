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
        done: true
    },
    {
        title: 'Milk',
        done: false
    },
    {
        title: 'Orange',
        done: false
    },
    {
        title: 'Eggs',
        done: true
    }
  ]
  
  const [ product, setCount ] = useState(shoppingList);
  
    return (
        <Container>
            <div>
                <h2>{shoppingList && shoppingList.length > 0 ? 'Shopping List' : 'Your Shopping List is Empty'}</h2>
                <ul>
                    {product.map((product, index) => {
                        const { title, done } = product;
                        return <ShoppingItem key={index} title={title} done={done}/>
                    })}
                </ul>
            </div>
        </Container>
    )
}
export default ShoppingList;