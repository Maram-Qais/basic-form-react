import { useState } from 'react'

function ValidateForm({addItem}) {
    const [formData,setFormData] = useState({
        product:"",
        quantity:0,
    });
    const[prodIsValid,setProdIsValid] = useState(false)


    const validate =(product)=>{
        if(product.length ===0){
            setProdIsValid(false)
        }else{
            setProdIsValid(true)
        }
    };
const handlechange =(evt)=>{
    if(evt.target.name==="product")
    validate(evt.target.value);

setFormData((currData)=>{
return{...currData,[evt.target.name] :evt.target.value
}
})

}

const handleSubmit=(e)=>{
    e.preventDefault();
    if(prodIsValid){
    addItem(formData);
    setFormData({product:"",quantity:0})
    }
  
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
{!prodIsValid && <p style={{color:"red"}}>product cannot be empty</p>
}
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

export default ValidateForm