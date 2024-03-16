import { useState } from 'react'
import {v4 as uuid} from "uuid";
import ShoppingListForm from './ShoppingListForm';
import ValidateForm from './ValidateForm';

function ShoppingList() {
    const [items,setItems]= useState([{
        id:uuid(),
        product:"bananas",
        quantity:8
    },
{  id:uuid(),
    product:"eggs",
    quantity:12
},

]);

const addItem = (item)=>{
    setItems((currItem)=>
    {return[...currItem,{...item, id:uuid()}]});

}



  return (
    <div>
<h1>shopping list</h1>
<ul>

    {items.map((i)=>
    <li key={i.id}>{i.product} - {i.quantity}</li>
    )}
</ul>
{/* <ShoppingListForm addItem={addItem}/> */}
<ValidateForm addItem={addItem}/>
    </div>
  )
}

export default ShoppingList