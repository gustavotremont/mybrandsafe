import React from "react";
import {Link} from 'react-router-dom'

const Login = () => {
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
