import './Landing.css'
import React, {useContext} from "react";
import { useNavigate } from 'react-router-dom'
import { sessionContext } from '../../context/sessionContext'

const Landing = () => {
  const navigate = useNavigate()
  const {session} = useContext(sessionContext)

  if(session){
    navigate('/dashboard')
  }

  return (
    <section className='landing'>
      <div className='landing-header'>
        <h2 className="landing-logo" >My<strong className='landing-logo-altcolor'>Brand</strong>Safe</h2>
        <div className='landing-buttons' >
          <button className='landing-button' onClick={() => navigate('/signup')} >Regístrate</button>
          <button className='landing-button' onClick={() => navigate('/login')} >Accede</button>
        </div>
      </div>

      <div className='landing-body'>
        <article className='landing-info'>
          <h1 className='landing-info-title'>Protege tu Marca</h1>
          <p className='landing-info-text'>Utilizamos las herramientas más avanzadas de protección de marca online para detectar y procesar automáticamente miles de infracciones de la propiedad intelectual.</p>
          <button className='landing-info-button' onClick={() => navigate('/login')} >Continuar</button>
        </article>
        <div className='landing-image-container'>
            <img className='landing-demo-image' src="https://firebasestorage.googleapis.com/v0/b/mybrandsafe.appspot.com/o/pages-images%2Fhome-landing.png?alt=media&token=0a36aaa5-87f3-4c3d-8a6f-d08effee4018" alt="demo visual de la aplicación" />
            {/* <img className='landing-background-image' src="https://firebasestorage.googleapis.com/v0/b/mybrandsafe.appspot.com/o/pages-images%2Flanding-image-background.png?alt=media&token=f8f20fd0-cad6-4e57-a030-dc4fae925f42" alt="diseño de fondo" /> */}
        </div>
        <div></div>
      </div>

    </section>
  );
};

export default Landing;
