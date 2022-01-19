import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Dashboard from "../Dashboard";
import Landing from '../Landing';

function Main() {
  return (
    <main>
        <Routes>
          <Route path='/' element={<Landing/>}/>
          <Route path='dashboard/*' element={<Dashboard/>}/>
        </Routes>
    </main>
  )
}

export default Main
