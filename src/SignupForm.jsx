import { useState } from 'react'

function SignupForm() {
 const[firstName,setfirstName]=useState("");
 const[lastName,setlasttName]=useState("");


 const updateFisrtname =(evt)=>{
    setfirstName(evt.target.value);
 }

 const updatelastName =(evt)=>{
    setlasttName(evt.target.value);
 }

 const handlesub =()=>{
alert(firstName, lastName)

 };
  return (
<div>
<label htmlFor='firstName'>fisrt name</label>
<input type='text'
placeholder='first Name'
id='firstName'
value={firstName}
onChange={updateFisrtname}
/>

<label htmlFor='lastName'> last name</label>
<input type='text'
placeholder='Last Name'
id='lastName'
value={lastName}
onChange={updatelastName}
/>

<button onClick={handlesub}>submit</button>


</div>
  )
}

export default SignupForm