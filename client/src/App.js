import 'normalize.css'
import './styles/main.scss';
import React, { useState } from 'react'
import {BrowserRouter} from 'react-router-dom';
import Signup from './components/LandingPages/Signup'
import { sessionContext } from './context/sessionContext' 
import axios from 'axios';

function App() {
  const [session, setSession] = useState(false)

  const authSession = () => {
    axios.post('/api/session/authLogin')
      .then( res => {
        setSession(true)
      })
      .catch( error => {
        setSession(false)
      })
  }

  const sessionObj = {session, setSession, authSession}

  return (
    <div className="App">
      <BrowserRouter>
        <sessionContext.Provider value={sessionObj}>
          
        </sessionContext.Provider>
      </BrowserRouter>
    </div>
  );
}

export default App;