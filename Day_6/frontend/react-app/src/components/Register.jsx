import React from 'react'
import axios from 'axios'
const Register = () => {
    const handleregister =async (e)=>{
        e.preventDefault()
        const name = e.target.name.value;
        const age = e.target.age.value;
        const users = {name,age}
        await axios.post('https://fsd-backend-p2x5.onrender.com',users )
        alert('User registered Successfully')
    }
  return (
    <div>
      <form onSubmit={handleregister}>
        Name<input type="text" placeholder="Name" name="name" required/>
        Age<input type="number" placeholder="Age" name="age" required/>
        <button type="submit">Register</button>
      </form>
    </div>
  )
}

export default Register