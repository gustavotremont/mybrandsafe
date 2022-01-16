import React, {useContext, useState} from "react";
import { Navigate } from 'react-router-dom'
import { sessionContext } from '../../context/sessionContext'
import axios from 'axios';

const Login = () => {
  const [errors, setErrors] = useState([])
  const {session, setSession} = useContext(sessionContext)

  const handleSubmit = (e) => {
    e.preventDefault()

    const email = e.target.email.value
    const password = e.target.password.value
    axios.post('/api/session/login', {email, password})
      .then( res => {
        setSession(true)
      })
      .catch( error => {
        setErrors(error.response.data.errors)
      })
  }

  const handleErrors = (errs) => {
    return errs.map(err => <p>{err}</p>)
  }

  if(session){
    return <Navigate to="/" />
  }

  return (
    <div>
      {handleErrors(errors)}
      <form onSubmit={handleSubmit}>
        <label htmlFor="email">email</label>
        <input type="email" name="email" id="email" />

        <label htmlFor="password">password</label>
        <input type="password" name="password" id="password" />

        <input type="submit" value="sub" />
      </form>
    </div>
  );
};

export default Login;
