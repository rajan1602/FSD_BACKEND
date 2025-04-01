import React from 'react'
import axios from 'axios'
const Delete = () => {
    const handledelete = async (id) => {
        await axios.delete(`http://localhost:9000/users/${id}`);
        alert('User deleted successfully')
    }
    return (
    <div>
      <form onSubmit={handledelete}>
    User Id <input type="number" placeholder="User ID" name="id" required/>
    <button type="submit">Delete</button>
        </form>
    </div>
  )
}

export default Delete
