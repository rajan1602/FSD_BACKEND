import React from 'react'
import Register from './components/Register'
import View from './components/View'
import Update from './components/Update'
import Delete from './components/Delete'
import './App.css'
import './index.css'
import { createRoot } from 'react-dom/client'
import { StrictMode } from 'react'
const App = () => {
  return (
    <div>
      <h1 style={{backgroundColor: 'greenyellow'}}>User Registration System</h1>
      <Register/>
      <Update/>
      <Delete/>
      <View/>
    </div>
  )
}

export default App
