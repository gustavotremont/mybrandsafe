import React from "react";
import { Routes, Route } from 'react-router-dom'
import Landing from '../Landing'
import Login from '../Login'
import Signup from '../Signup'

const Main = () => {
  return (
    <main>
      <Routes>
        <Route path='/' element={ <Landing/> } />
        <Route path='/login' element={ <Login/> } />
        <Route path='/signup' element={ <Signup/> } />
        <Route path='/dashboard' element={ <div>Dashboard</div> } />
      </Routes>
    </main>
  );
};

export default Main;
