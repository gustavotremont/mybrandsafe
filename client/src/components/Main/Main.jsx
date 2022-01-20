import React, {useState} from "react";
import { Routes, Route } from 'react-router-dom'
import Landing from '../Landing'
import Login from '../Login'
import Signup from '../Signup'
import Loader from '../Loader'
import Dashboard from "../Dashboard";

const Main = () => {
  const [Loading, setLoading] = useState(false);

  return (
    <main>
      <Loader isLoading={Loading}/>
      <Routes>
        <Route path='/' element={ <Landing/> } />
        <Route path='/login' element={ <Login isLoading={setLoading}/> } />
        <Route path='/signup' element={ <Signup isLoading={setLoading}/> } />
        <Route path='/dashboard' element={ <Dashboard/> } />
      </Routes>
    </main>
  );
};

export default Main;
