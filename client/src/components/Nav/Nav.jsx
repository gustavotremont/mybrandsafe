import React, {useContext} from 'react'
import { Link } from 'react-router-dom'
import { sessionContext } from '../../context/sessionContext'
import axios from 'axios'

function Nav() {
  const {session, setSession} = useContext(sessionContext)

  const handleLogOut = (e) => {
    e.preventDefault();
    axios.post('/api/session/logout')
      .then( res => {
        setSession(false)
      })
      .catch( error => {
        console.log(error.response.data.errors)
    })
  }

  return (
    <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
      <Link to='/'>Home</Link>
      
      {
        session
          ? <>
              <Link to='/dashboard/login'>Dashboard</Link>
              <button style={{width: 100}} onClick={handleLogOut} >Logout</button>
            </>
          : <>
              <Link to='/dashboard/login'>Login</Link>
              <Link to='/dashboard/signup'>Signup</Link>
            </>
      }
      
    </div>
  )
}

export default Nav

