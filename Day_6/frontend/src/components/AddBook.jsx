import React from 'react'
import axios from 'axios'


const AddBook = () => {
  const handleadd = (e) => {
    e.preventDefault(); // This prevents the page from refreshing on submit
    // Now you can access form data if you want
    console.log('Form Submitted');
  }
  return (
    <div>
      <h1>Add Book Details</h1>
      <form onSubmit={handleadd}>
        Title: <input type="text" name='title' required />
        Author: <input type="text" name='author' required />
        Date: <input type="date" name='date' required />
        Image URL: <input type="text" name='image' required />
        <button type='submit'>Submit</button>
      </form>
    </div>
  )
}

export default AddBook
