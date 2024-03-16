import { useState } from 'react'
function UsernameForm() {
const[username,setUsername] =useState("timmy")
const updateUsername =(evt)=>{
    setUsername(evt.target.value)
}
 return (
 <div>
    <label htmlFor="username"> 
    enter a username</label>
 <input
 id='username' type='text' placeholder='username' value={username}
 onChange={updateUsername}/>
 <button>submit</button>
    </div>



  )
}

export default UsernameForm