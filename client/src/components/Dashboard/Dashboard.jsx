import React, {useContext, useState} from "react";
import { Navigate, Routes, Route, Link, useMatch  } from 'react-router-dom'
import { sessionContext } from '../../context/sessionContext'

const Dashboard = () => {
  const {session} = useContext(sessionContext)
  const path = useMatch('/dashboard/login')

  if(!session){
    return <Navigate to="/" />
  }

  return (
    <div>
      <div>
        soy la landing
      </div> 

      <Routes>
        <Route index element={ <div> <h2>login</h2> </div>} />
        <Route path="login" index element={ <div> <h2>login</h2> </div>} />
        <Route path="signup" element={ <div> <h2>registro</h2> </div> }/>    
      </Routes>

      <div>
        {
          path 
            ? <Link to="signup/">register</Link>
            : <Link to="login/">login</Link>
        } 
      </div>
    </div>
  );
};

export default Dashboard;
