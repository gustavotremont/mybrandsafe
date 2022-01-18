import React from "react";
import { Routes, Route } from "react-router-dom"
import Login from '../LandingPages/Login'
import Signup from '../LandingPages/Signup'

const Main = () => {
  return (
    <main>
      <Routes>
        <Route path='/login' element={<Login/>} />
        <Route path='/Signup' element={<Signup/>} />
      </Routes>
    </main>
  );
};

export default Main;
