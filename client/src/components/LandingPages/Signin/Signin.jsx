import React from "react";
import Logo from '../Login/Logo 3.png'
import '../Login/Login.css'


const Signin = () => {
  return <div class="super">
  <div class="divbrand1">
    <div>
      <img class="icon" src={Logo}/>
    </div>
    <div class="brand2">
      <p>Deja de perder ventas</p>
    </div>
    <div class="brand3">
      <p>Sé parte del cambio. Necesitamos que te registres para poder ofrecerte las mejores herramientas para
        salvaguardar tu marca.</p>
    </div>
  </div>
  <div class="formlogin">
    <form action="">
      <h2 class="block text-gray-800  text-3xl font-bold mb-5">Registro</h2>
      <label class="text-gray-400  text-1x1  mb-10">
        Si ya eres miembro puedes registarte con tu Email y contraseña.
        <hr class="mb-10"/>
      </label>
      <div class="w-full max-w-xs">
          <div class="mb-4">
            <label class="block text-blue-600 text-sm font-bold mb-2" for="email">
              Email
            </label>
            <input
              class="w-96 rounded-lg h-14 shadow appearance-none border border-blue-500 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mb-10"
              id="username" type="text" placeholder="ejemplo@gmail.com                             🔍"/>
          </div>
          <div class="mb-6">
            <label class="block text-blue-600  text-sm font-bold mb-2" for="password">
              Contraseña
            </label>
            <input
              class=" rounded-lg h-14 shadow appearance-none border border-blue-500 rounded w-full py-2 px-3 text-gray-700 mb-7 leading-tight focus:outline-none focus:shadow-outline"
              id="password" type="password" placeholder="******************                                   🔍"/>
            <p class="text-red-500 text-xs italic">Por favor elije una contraseña</p>
          </div>
          <input type="checkbox"/><label class="text-gray-400  text-1xl">Recuerdame</label>
          <button
            class="h-14 w-80 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-20 mb-5 mt-2 rounded focus:shadow-outline"
            type="button">Continuar</button><br/>
          <a class="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800" href="#">
            <label class="text-gray-400  text-1xl  mb-10">
              No tienes cuenta ? </label> Registrarte aqui
          </a>
      </div>
    </form>
  </div>
</div>
};

export default Signin;
