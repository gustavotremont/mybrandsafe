import React, {useContext, useState} from "react";
import { Link, Navigate } from 'react-router-dom'
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
    <section className="flex-division">
      <section className="hero">
          <h2 className="hero--logo" >My<strong className='hero--logo--altcolor'>Brand</strong>Safe</h2>
          <div className="hero--info">
            <h1 className="hero--info--title">Deja de perder ventas </h1>
            <p className="hero--info--text">Sé parte del cambio. Necesitamos que te registres para poder ofrecerte las mejores herramientas para salvaguardar tu marca.</p>
          </div>
      </section>
      <section className="form-section">
          <form className="form-body">
            <h3 className="form-body--title" >Acceso</h3>
            <p className="form-body--span">Si ya eres miembro puedes registarte con tu Email y contraseña.</p>
          
            <div className="form-body--field">
              <label className="form-body--field--label" htmlFor="loginEmail">Email</label>
              <input className="form-body--field--input" type="email" name="loginEmail" id="loginEmail" />
            </div>

            <div className="form-body--field">
              <label className="form-body--field--label" htmlFor="loginPassword">Contraseña</label>
              <input className="form-body--field--input" type="password" name="loginPassword" id="loginPassword" />
            </div>

            <div className="form-body--remember">
              <input className="form-body--remember--input" type="checkbox" name="loginRemember" id="loginRemember" />
              <label className="form-body--remember--label" htmlFor="loginRemember">Recuerdame</label>
            </div>

            <button className="form-body--button" >Continuar</button>

            <span className="form-body--login" >No tienes una cuenta ? <Link className="form-body--login--link" to='/signup' >Registrate aquí</Link></span>
            
          </form>
      </section>
    </section>
  )
};

export default Login;
