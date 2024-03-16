import { useState } from 'react'

function ShoppingListForm({addItem}) {
    const [formData,setFormData] = useState({
        product:"",
        quantity:0,
    })

const handlechange =(evt)=>{
setFormData((currData)=>{
return{...currData,[evt.target.name] :evt.target.value
}
})

}

const handleSubmit=(e)=>{
    e.preventDefault();
    console.log('submitted!!!!!!!')
    addItem(formData);
    setFormData({product:"",quantity:0})
}
return (
    <form onSubmit={handleSubmit}>

<label htmlFor='product'>Product name </label>
<input type='text'
 placeholder='product name'
 name='product'
 id='product'
 onChange={handlechange}
 value={formData.product}/>


<label htmlFor='quantity'>quantity </label>
<input type='number'
 placeholder='quantity'
 name='quantity'
 id='quantity'
 onChange={handlechange}
 value={formData.quantity}/>

<button>add item</button>
    </form>
  )
}

export default ShoppingListForm