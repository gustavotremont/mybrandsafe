import 'normalize.css'
import './styles/main.scss';
import React, { useState, useEffect } from 'react'
import { BrowserRouter } from 'react-router-dom';
import { sessionContext } from './context/sessionContext' 
import Main from './components/Main'
import axios from 'axios';

function App() {
  const [session, setSession] = useState('')

  const authSession = (sessionCredential) => {
    axios.post(`/api/session/auth/?credential=${sessionCredential}`)
      .then( res => {
        setSession(res.data.credential)
      })
      .catch( error => {
        setSession('')
      })
  }

  useEffect(() => {
    const authUserReturn = () => {
      axios.post(`/api/session/auth?userReturn=true`)
        .then( res => {
          setSession(res.data.credential)
        })
        .catch( error => {
          setSession('')
        })
    }

    authUserReturn()
  }, [])

  const sessionObj = {session, setSession, authSession}

  return (
    <div className="App">
      <BrowserRouter>
        <sessionContext.Provider value={sessionObj}>
          <Main/>
        </sessionContext.Provider>
      </BrowserRouter>
    </div>
  );
}

export default App;