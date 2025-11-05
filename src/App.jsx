import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Login from './Pages/Login'
import Register from './Pages/Register'

function App() {
  return (
    <>
    <Routes>
      <Route path='/login' element={<Login/>}/>
      <Route path='/' element={<Register/>}/>
    </Routes>
    </>
  )
}

export default App