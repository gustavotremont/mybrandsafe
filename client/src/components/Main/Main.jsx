import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Login from "../Login";
import Register from "../Register";
import Dashboard from "../Dashboard";

function Main() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<div>Este es el Home</div>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/signup' element={<Register/>}/>
        <Route path='/dashboard' element={<Dashboard/>}/>
      </Routes>
    </div>
  )
}

export default Main
