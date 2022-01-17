import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Dashboard from "../Dashboard";

function Main() {
  return (
    <div>

        <Routes>
          <Route path='/' element={<div>Este es el Home</div>}/>
          <Route path='dashboard/*' element={<Dashboard/>}/>
        </Routes>

    </div>
  )
}

export default Main
