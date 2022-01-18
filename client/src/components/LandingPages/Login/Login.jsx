import React from "react";
import './Login.css'
import {Link} from 'react-router-dom'
// import Logo from './Logo 3.png'

const Login = () => {
  return (
    <section className="flex-division">
      <section className="hero">
          <h2 className="hero-logo" >My<strong className='hero-logo-altcolor'>Brand</strong>Safe</h2>
          <h1 className="hero-title">Protege tu nombre</h1>
          <p className="hero-text">La búsqueda impulsada por bots, el reconocimiento avanzado dominios fraudulentos, descubrirán las posibles infracciones por ti.</p>
      </section>
      <section className="form-section">
          <form className="form-body">

            <h3 className="form-title" >Login</h3>


            <div className="form-field">
              <label className="form-label" htmlFor="loginEmail">Email</label>
              <input className="form-input" type="email" name="loginEmail" id="loginEmail" />
            </div>

            <div className="form-field">
              <label className="form-label" htmlFor="loginPassword">Contraseña</label>
              <input className="form-input" type="password" name="loginPassword" id="loginPassword" />
            </div>

            <span className="form-remember" >Recuerdame</span>

            <button className="form-button" >Continuar</button>

            <span className="form-login" >No tienes una cuenta ? <Link className="form-login-link" to='/signup' >Registrate aquí</Link></span>
            
          </form>
      </section>
    </section>
  )
  // return <div class="flex">
  //   <div class="divbrand1">
  //     <div>
  //       <img class="icon" src={Logo} />
  //     </div>
  //     <div class="brand2">
  //       <p>Protege tu nombre</p>
  //     </div>
  //     <div class="brand3">
  //       <p>La búsqueda impulsada por bots, el reconocimiento avanzado dominios fraudulentos, descubrirán las posibles infracciones por ti.</p>
  //     </div>
  //   </div>
  //   <div class="formlogin">
  //     <form action="">
  //       <h2 class="block text-blue-500  text-3xl font-bold mb-5" style={{ textAlign: 'start' }}>Login</h2>
  //       <hr class="mb-10" />
  //       <div class="w-full max-w-xs">
  //         <div class="mb-4">
  //           <label class="block text-blue-600 text-sm font-bold mb-2" for="email">
  //             Email
  //           </label>
  //           <input
  //             class="w-96 rounded-lg h-14 shadow appearance-none border border-blue-500 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mb-10"
  //             id="username" type="text" placeholder="ejemplo@gmail.com                             🔍" />
  //         </div>
  //         <div class="mb-6">
  //           <label class="block text-blue-600  text-sm font-bold mb-2" for="password">
  //             Contraseña
  //           </label>
  //           <input
  //             class=" rounded-lg h-14 shadow appearance-none border border-blue-500 rounded w-full py-2 px-3 text-gray-700 mb-7 leading-tight focus:outline-none focus:shadow-outline"
  //             id="password" type="password" placeholder="******************                                   🔍" />
  //         </div>
  //         <input type="checkbox"/><label class="text-gray-400  text-1xl">Recuerdame</label>
  //           <button
  //             class="h-14 w-80 bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-20 mb-5 mt-2 rounded focus:shadow-outline"
  //             type="button">Continuar</button><br/>
  //         <a class="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800" href="#">
  //           <label class="text-gray-400  text-1xl  mb-10">
  //             Ya tienes cuenta ? </label> Logueate aqui.
  //         </a>
  //       </div>
  //     </form>
  //   </div>
  // </div>
};

export default Login;
