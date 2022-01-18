import 'normalize.css'
import './App.css';
import React, { useState } from 'react'
import {BrowserRouter} from 'react-router-dom'
// import Header from './components/Header'
// import Footer from './components/Footer'
import Main from './components/Main'
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
          {/* <Header/> */}
          <Main/>
          {/* <Footer/> */}
        </sessionContext.Provider>
      </BrowserRouter>
    </div>
  );
}

export default App;