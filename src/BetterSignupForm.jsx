import { useState } from 'react'

function BetterSignupForm() {

const [formData,setFormData]=useState({firstName:"",lastName:"",
password:""})

const handlechange =(evt)=>{
const changeField = evt.target.name;
const newValue= evt.target.value;
console.log(changeField , newValue)
setFormData((currData)=>{
    return {...currData,[changeField]:newValue};
})
}
    
const handlesub =()=>{
    console.log(formData)};

return (
<div>
<label htmlFor='firstName'>fisrt name</label>
<input type='text'
placeholder='first Name'
id='firstName'
name="firstName" //should match state prop
value={formData.firstName}
onChange={handlechange}
/>

<label htmlFor='lastName'> last name</label>
<input type='text'
placeholder='Last Name'
id='lastName'
name='lastName'
value={formData.lastName}
onChange={handlechange}
/>
<label htmlFor="password">password</label>
<input type='password'
name='password'
value={formData.password}
onChange={handlechange}
id='password'
placeholder='password'
/>

<button onClick={handlesub}>submit</button>


</div>
)
}

export default BetterSignupForm