import React, {useContext, useState} from "react";
import { Navigate } from 'react-router-dom'
import { sessionContext } from '../../context/sessionContext'

const Dashboard = () => {
  const {session} = useContext(sessionContext)

  if(!session){
    return <Navigate to="/" />
  }

  return (
    <div>
      Dashboard
    </div>
  );
};

export default Dashboard;
